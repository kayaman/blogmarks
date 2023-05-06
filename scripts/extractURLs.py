import re

inputFileName = '/home/kayaman/Downloads/kayaman_bookmarks.html'
outputFileName = ''

bookmarksFile = open(inputFileName, 'r')
rawLines = bookmarksFile.readlines()

bookmarks = []

for line in rawLines:
    url = re.findall('(http|https):\/\/(\S*)', line)
    if len(url) > 0:
        bookmarks.append(url[0])
        print(url)


print(bookmarks)
