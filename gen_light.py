map = [
    ["pages/portfolio-dark.html", "pages/portfolio-light.html"],
    ["pages/qualifications-dark.html", "pages/qualifications-light.html"],
    ["pages/service-dark.html", "pages/service-light.html"],
    ["index.html", "index-light.html"],
    ["styles/dark.css", "styles/light.css"],
    ["sunny.png", "half-moon.png"],
]

files = [
    ["index.html", "index-light.html"],
    ["pages/portfolio-dark.html", "pages/portfolio-light.html"],
    ["pages/qualifications-dark.html", "pages/qualifications-light.html"],
    ["pages/service-dark.html", "pages/service-light.html"],
]

for [fin, fout] in files:
    with open(fin) as filein:
        with open(fout, "w+") as fileout:
            for line in filein:
                for i in map:
                    line = line.replace(i[0], i[1])
                fileout.write(line)
