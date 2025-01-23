
for i in range(1,26):
    print("function handleChange",i,"(){", sep="")
    print('    if(box',i,'.style.backgroundColor != "red"){', sep="")
    print('        box',i,'.style.backgroundColor = "red";', sep="")
    print('        form.style.display = "block"')
    print('        category = box',i,'.textContent', sep="")
    print('        boxid = "box',i,'"', sep="")
    print('        removeListeners()')
    print('    }')
    print('}')
