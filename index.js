    // Load your images on page-load
    function preloader() {
        const imagesPaths = [
           "./img/image-1.jpg",
           "./img/image-2.jpg",
           "./img/image-3.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */

    const nodelist = document.querySelectorAll('button');
    
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
    const resourceObject = [
        {
            headingContent: "About us",
            imgUrl: "./img/image-1.jpg",
            imgAlt: 'About us',
            bodyText: "Serenity Green Technologies has been a landmark and a place to nourish the enviornment and generate clean eco-friendly earth sustainable energy since 1939."
        },
        {
            headingContent: "Our Technology",
            imgUrl: "./img/image-2.jpg",
            imgAlt: 'Our Technology',
            bodyText: "Our technologies and innovations are ground-breaking and are very effective in generating green and clean energy that can be used and sustained for a long period of time."
        },
        {
            headingContent: "Our Locations",
            imgUrl: "./img/image-3.jpg",
            imgAlt: 'Our Locations',
            bodyText: "Our branches are in multiple locations in diferent countries and provinces. You can find us on google or you can contact us on our social media or email."
        }
    ];

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    const newContent = document.querySelector('.new-content');
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    
    /* 
    Start your handleSelection function here. */ 
    function handleSelection(ev){
        
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */

        for (let btn of nodelist){
            if(btn.hasAttribute('id')){
                btn.removeAttribute('id');
            }
        }

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
        ev.target.setAttribute('id', 'active-button');

        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 

        if (ev.target.innerText == "About us") {
            newContent.innerHTML = `<h1>${resourceObject[0].headingContent}</h1>
                <img src="${resourceObject[0].imgUrl}" alt="${resourceObject[0].imgAlt}">
                <p>${resourceObject[0].bodyText}</p>`;
        }else if(ev.target.innerText == "Our Technology"){
            newContent.innerHTML = `<h1>${resourceObject[1].headingContent}</h1>
                <img src="${resourceObject[1].imgUrl}" alt="${resourceObject[1].imgAlt}">
                <p>${resourceObject[1].bodyText}</p>`;
            }else if(ev.target.innerText == "Our Locations"){
            newContent.innerHTML = `<h1>${resourceObject[2].headingContent}</h1>
                <img src="${resourceObject[2].imgUrl}" alt="${resourceObject[2].imgAlt}">
                <p>${resourceObject[2].bodyText}</p>`;
        }
    
    /* 
    Close your handleSelection function here. */  
    
    }

    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */  

    for (let btn of nodelist){
        btn.addEventListener('click', handleSelection);
    }