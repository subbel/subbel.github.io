count = 1
def text(count):
    textt = f"""function handleChange{count}(){{
    box{count}.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box{count}.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box{count}"
    removeListeners()
    }}"""
    return textt



finalstring = ""
repeat = 25

while count <= repeat:
    finalstring += f"{text(count)}\n"
    count += 1

with open("output.txt", "w") as file:
    file.write(finalstring)