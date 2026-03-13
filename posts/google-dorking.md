Common Google Dorking Commands

site: 
	Search within a specific site or domain
	site:example.com

filetype: 
	Finds files of a specific type (think: pdf, xls, csv, etc...)
	filetype:pdf secrets confidential
	searches for pdfs with the word "secrets" and "confidential"

allinurl:
	search for pages with all the specified words in the url
	

inurl:
	Search for keywords in a URL
	inurl:admin login 
	searches for urls with "admin" and "login"

allintitle:
	search for pages where all the keywords appear in the title
	allintitle:login admin
	searches for pages with both "login" and "admin" in the title

intitle:
	Search for keywords in a Page Title
	intitle:"index of" password
	find pages with "index of" in the title combined with the keyword "password"

allintext: 
	searches for pages containing a set of specific words in the text
	allintext:username password filetype:xls csv
	Searches for excel and csv files containing "username" and "password" in the text

intext:
	search for specific words within a page
	intext:"sql syntax error"
	searches for pages that contain SQL syntax errors, this could mean a potential SQL injection vuln.

cache: 
	display google's cached version of a webpage
	cache:example.com

link:
	find pages that link to a specific url
	link:example.com

related: 
	find websites similar to a given url
	related:example.com

