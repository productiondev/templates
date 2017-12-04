# Iris Direct Mail Template
This template was built at Baltimore's AF for use with their controls / systems at the time of development. Typtically there are two landing pages for a direct mail campaign. One for panel A and one for panel B. They will each have their own order forms as well. 


##  Using the template
	1. Get a the excel sheet that lists all the promocodes that will be used for this Direct mail campaign. Usually there are around 30 or so. One code to track users who don't use a discount code. One to track users who error out when entering the discount code, and an array of others that tracks the origin of an accurate discount code. 
	2. Make sure the publication name is correct. The template says, Lifetime Income Report.
	3. Replace the image at the bottom of the page with one specific to this campaign and panel. 
	4. Update the promocode in errorcode 	= 'DLIRTBW3'; to the new error code for this panel.
	5. Update the regular expressions to reflect the new range of possible discount codes. 
	6. Replaced the url in the window.location fields to the new order form
	7. Test with a promocode once ready to make sure there are no errors. 

## Link to example: 
https://pro.agorafinancial.com/p/LIR_DM_glitch_panela_1117/DLIRTBW1/?h=true
