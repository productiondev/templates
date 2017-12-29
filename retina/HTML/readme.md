# Iris Html (#10) Template
This template was built at Baltimore's AF for use with their controls / systems at the time of development.  

## Doc Index
1. [Purpose of the template](#purpose)  
2. [Using the template](#Using)  
3. [Uploading a completed template to Iris](#Uploading)   
4. [Reviewing the completed page](#Review)  
5. [What’s in the template](#Contents)


## <a id="purpose" name="purpose">Purpose of the template</a>
 The **retina_html_template.html** file was built to establish standard code structure / controls across developers to help speed up collaboration and development of an Retina html landing page.


##  <a id="Using" name="Using">Using the template</a>
*	As the page is being developed locally place appropriate content between the comments of start and end. Please keep the section tags as they are handles for VWO. 
*	Use the promo’s word docx to come up with a title for the page
*	Replace the placehold.it image with the family shot
* 	Place any java script in the jQuery( document ).ready(function($) {}); function.


## <a id="Uploading" name="Uploading">Uploading a completed template to Retina</a>
*	Remove the scripts above the 'Put Code Below in Retina' section, and deleted any un-needed code / comments
*	Copy everything between the html head tags of the completed template. Got to Retina post you want to use. Or <a href ="https://www.useloom.com/share/7a8ca0233e2c4e629c25eaeff90f6832">create a new Retina post</a>. Paste the copied code from the template into Retinas text editor (visible on classic mode). 
*	Copy everything between the html body tags of the template. On the same Retina page as mentioned above paste the copied code there below the section you just made.
* Note: do not include the </head>, <body>, </body>, and </html> tags.


## <a id="Review" name="Review">Reviewing the completed page</a>
https://docs.google.com/document/d/1m0hC44a6-KcrWTND_A-4HtTjpaNsbD2mJz-5p68W0Hs/edit?usp=sharing

## <a id="Contents" name="Contents">What’s in the template</a>

### meta charset="utf-8"
Ensures that the page wlil be parsed as a normal single-byte ASCII file. This is not uploaded to Retina. 


### '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>'
Loads the jquery library for testing jqeury locally. This should be removed on Retina because our build populates that globally. 

### '<script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>'
Loads the wistia library. Wistia is the service we use stream videos. This should be removed on Iris because our build populates that globally. 

### ' <link rel='stylesheet' href='https://d1jkj6ikrp6h6t.cloudfront.net/wp-content/themes/retina/stylesheets/control.css' type='text/css' media='all' />' This is a style sheet that is loaded globally on Retina it has basic reset and foundation classes as well as some Retina specific styles. Remove this when uploading to Retina.

### '<link rel="stylesheet" type="text/css" href="https://d13p2xj50zkyqm.cloudfront.net/promos/AF/styles/controlstyle.css" />' This is a stripped down version of the Iris style sheet. Foundation and reset classes have been removed since that is now being supplied globally by Retina. I encourage each imprent to make their own version of this style sheet. 


## <a href="#">More Retina Notes</a>  

