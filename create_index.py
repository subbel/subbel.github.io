import os

def find_all_folders(dir):
    list_of_files = os.listdir(dir)
    list_of_folders = [each for each in list_of_files if os.path.isdir(each)]
    return list_of_folders
def find_all_sites(dir):
    list_of_files = os.listdir(dir)
    list_of_html = [each for each in list_of_files if ".html" in each]
    return list_of_html
def search_directory(dir):
    html_files = find_all_sites(dir)
    folders = find_all_folders(dir)
    all_html = []
    for each in html_files:
        all_html.append(f"{each}" )
    if len(folders) != 0:
        for folder in folders:
            html = search_directory(f"{dir}/{folder}")
            for each in html:
                all_html.append(f"{dir}{folder}/{each}"  )
    return all_html

all_html = search_directory('./')
html_code = ""
for each in all_html:
    name = each.split("/")
    if len(name) == 1:
        name = name[0]
    else:
        new_name = name[-1]
        name.pop()
        for each1 in reversed(name):
            if each1 != ".":
                new_name += f" in {each1}"
        name = new_name
    html_code += f"<li><a href = '{each}'>{name}</a></li>\n"
continue_reading = True
split_line_start = "<!-- Insert Here -->"
split_line_end = "<!-- End Here -->"
with open("./index.html", 'r') as file:
    data = ""
    for x in file:
        if split_line_end in x:
            data += html_code
            continue_reading = True
        if continue_reading:
            data += x
        if split_line_start in x:
            continue_reading = False

with open("./index.html", 'w') as file:
    file.write(data)
