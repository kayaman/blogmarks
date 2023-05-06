import re

inputFileName = '/home/kayaman/Downloads/kayaman_bookmarks.html'
outputFileName = '/home/kayaman/Documents/bookmarks_extracted_1.txt'

bookmarksFile = open(inputFileName, 'r')
rawLines = bookmarksFile.readlines()

outputFile = open(outputFileName, 'at')
for line in rawLines:
    urls = re.findall('(https:\/\/\S*)', line)
    for url in urls:
        print(url)
        if len(url) > 0:
            outputFile.write(f'\n{url}')
outputFile.close()
