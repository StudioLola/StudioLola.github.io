var swapped = 0;
var factor = 0;
var imagelist_all = 
[
	['WORK/Gallery-Images/WORK1x1/curved-fold.jpg', 'Curved fold study', 'Experiments in form-making with curved folds, inspired by origami. ', ['MIX', 'JEWELLERY', 'SCULPTURE'], 'page', 'Visit instagram profile', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/sepal-CAD.jpg', 'Sepal', 'Shape-shifting object that transforms into a sculptural bracelet. Work-in-progress.', ['MIX', 'JEWELLERY', 'MECHANICAL'], 'page', 'Visit instagram profile', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/circle-square.jpg', 'Shape-shifting object', 'Coming soon', ['MIX', 'JEWELLERY', 'MECHANICAL','SCULPTURE'], 'page', 'Explore the series', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/knysna-turaco.jpg', 'Knysna Turaco', 'A mechanical bird with wings that fly open as an object is removed from its beak. ', ['MIX', 'MECHANICAL'], 'knysna', 'Read more', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/abstract-earrings.jpg', 'Abstract Earrings', 'Silver wire earrings for everyday wear', ['MIX', 'JEWELLERY', 'SCULPTURE'], 'page', 'Request price', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/orbit-ring.jpg', 'Orbit ring', 'Orbit ring with a personal story for the lovely Pervin.', ['MIX', 'JEWELLERY','CUSTOM'], 'Custom', 'Explore custom jewellery', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/forged-brooch.jpg', 'Forged brooch', 'Brooch with pearls, hammered from a piece of silver. This piece is available for purchase, so if you are interested please send an enquiry. ', ['MIX', 'JEWELLERY', 'SCULPTURE'], 'mailto:lolagiuffre@gmail.com?subject=Forged brooch', 'Request price', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/anniversary-ring.jpg', 'Anniversary ring', 'White gold and lab-grown diamond ring, celebrating the wedding anniversary of Tim & Hayley. ', ['MIX', 'JEWELLERY','CUSTOM'], 'Custom', 'Explore custom jewellery', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/braille-ring.jpg', 'Braille Ring', 'A ring with a special story. Gold balls along the rails form a word in braille. A present from a father, who is legally blind, to his daughter. ', ['MIX', 'JEWELLERY','CUSTOM'], 'Custom', 'Explore custom jewellery', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/sine-necklace.jpg', 'Sine necklace', 'description', ['MIX', 'JEWELLERY'], 'mailto:lolagiuffre@gmail.com?subject=Sine necklace', 'Request price', 'HOVER TEXT HERE'],	

	['WORK/Gallery-Images/WORK1x1/gumnut-necklace.jpg', 'Gumnut necklace', 'Pendant commissioned by Maarten to celebrate Gwen’s 60th birthday. Gwen had her eye on this opal ever since she commissioned the Australian opal earrings for her two daughters in 2021. ', ['MIX', 'JEWELLERY'], 'mailto:lolagiuffre@gmail.com?subject=Gumnut necklace', 'Request price', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/secret-pearl.jpg', 'Secret pearl box', 'A small, handmade, silver box. A pearl at the centre is only visible from certain angles. ', ['MIX', 'JEWELLERY', 'SCULPTURE'], 'page', 'Request price', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/gold-sapphire-ring.jpg', 'Gold ring with sapphire', "Gold ring with a sapphire repurposed form the customer's grandmother's earrings.", ['MIX', 'JEWELLERY','CUSTOM'], 'Custom', 'Explore custom jewellery', 'HOVER TEXT HERE'],	

	['WORK/Gallery-Images/WORK1x1/shape-shift-study.jpg', 'Shape-shifting objects', 'description', ['MIX', 'JEWELLERY','MECHANICAL'], 'amy', 'Read more', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/amy.jpg', 'Shape-shifting pendant', 'description', ['MIX', 'JEWELLERY','MECHANICAL','CUSTOM'], 'amy', 'Read more', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/responsive-walkway.jpg', 'Responsive walkway', 'description', ['MIX', 'INSTALLATION','MECHANICAL'], 'walkway', 'Read more', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/flexous.jpg', 'Flexous Mechanisms', 'description', ['MIX', 'MECHANICAL'], 'flexous', 'Read more', 'HOVER TEXT HERE'],	

	['WORK/Gallery-Images/WORK1x1/copper-tests.jpg', 'Form study', ' ', ['MIX','JEWELLERY', 'SCULPTURE'], 'https://www.instagram.com/lolagiuffredesign/', 'View in shop', 'HOVER TEXT HERE'],	

	['WORK/Gallery-Images/WORK1x1/roosegaarde.jpg', 'Presence, Studio Roosegaarde', 'description', ['MIX', 'INSTALLATION', 'MECHANICAL'], 'presence', 'Read more', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/SYNC-interaction-1.jpg', 'SYNC, Studio Roosegaarde', 'description', ['MIX', 'INSTALLATION', 'MECHANICAL'], 'sync', 'Read more', 'HOVER TEXT HERE'],

	['WORK/Gallery-Images/WORK1x1/daisy-chain.jpg', 'The Daisy Chain', '1.4km daisy chain. 35,000 daisies.', ['MIX', 'INSTALLATION', 'SCULPTURE'], 'daisy-chain', 'Read more', 'HOVER TEXT HERE'],


	['WORK/Gallery-Images/WORK1x1/Gwen-Pendant.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Gwen'],
	['WORK/Gallery-Images/WORK1x1/RR.jpg', 'Remo Random pin', 'This ring has braille dots on it, with a special message.', ['CUSTOM', 'JEWELLERY'], 'CUSTOM JEWELLERY', 'For Remo'],
	['WORK/Gallery-Images/WORK1x1/Kat-Pendant.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Kat'],
	['WORK/Gallery-Images/WORK1x1/Sonia-Earrings.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Sonia'],
	
	
	['WORK/Gallery-Images/WORK1x1/Brigitte-Earrings.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Brigitte'],
	['WORK/Gallery-Images/WORK1x1/Victoria-Ring-1.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Victoria'],
	['WORK/Gallery-Images/WORK1x1/Melanie-Ring.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Melanie'],
	['WORK/Gallery-Images/WORK1x1/Maxime-Ring.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Maxime'],
	['WORK/Gallery-Images/WORK1x1/Lisanne-Earrings.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Lisanne'],
	['WORK/Gallery-Images/WORK1x1/Katie-Ring.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Katie'],
	['WORK/Gallery-Images/WORK1x1/Jesse-Ring.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Jesse'],
	['WORK/Gallery-Images/WORK1x1/Fernanda-Ring.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Fernanda'],
	
	['WORK/Gallery-Images/WORK1x1/Pauline-Earrings.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Pauline'],
	['WORK/Gallery-Images/WORK1x1/Max-Ring.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Max'],

	['WORK/Gallery-Images/WORK1x1/Victoria-Necklace.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Victoria'],
	['WORK/Gallery-Images/WORK1x1/Susan-Necklace.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Susan'],
	['WORK/Gallery-Images/WORK1x1/Georgia-Ring.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Georgia'],
	['WORK/Gallery-Images/WORK1x1/Katie-Earrings.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Katie'],
	['WORK/Gallery-Images/WORK1x1/Dee-Earrings.jpg', 'IMAGE TITLE', 'description', ['CUSTOM', 'JEWELLERY'], 'page', 'For Dee'],
];
var filtered_list = imagelist_all;

function MoreLikeThis(url) {
    window.location.href = url;
}

function swap(index1, index2) {
    const gallery = document.getElementById('imageGallery');
    const images = gallery.getElementsByClassName('image');

    // Ensure indices are within bounds
    if (index1 < 0 || index2 < 0 || index1 >= images.length || index2 >= images.length) {
        console.error('Invalid indices for image swap.');
        return;
    }

    // Get the two images to swap
    const image1 = images[index1];
    const image2 = images[index2];

    // Clone the nodes to swap (deep clone to include event listeners)
    const clone1 = image1.cloneNode(true);
    clone1.onclick = function () {
		showDetails(this);
	};
	const strippedId1 = clone1.id.replace(/^0+/, ''); // Removes leading zeros from id1
	// Convert the stripped IDs to numbers
	const page_index1 = parseInt(strippedId1);
	var pagelink = filtered_list[page_index1-1][4];
	
	const button1_new = clone1.querySelector('button');
	button1_new.addEventListener('click', function() {
		// Get the button text
		var buttonURL = pagelink.trim();

		// Construct the page URL based on the button text
		var pageURL = buttonURL.toUpperCase() + '.html';

		// Redirect to the dynamically generated page URL
		window.location.href = pageURL;
	});

    const clone2 = image2.cloneNode(true);
    clone2.onclick = function () {
		showDetails(this);
	};
	const strippedId2 = clone2.id.replace(/^0+/, ''); // Removes leading zeros from id1
	// Convert the stripped IDs to numbers
	const page_index2 = parseInt(strippedId2);
	var pagelink2 = filtered_list[page_index1-1][4];
	
	const button2_new = clone1.querySelector('button');
	button2_new.addEventListener('click', function() {
		// Get the button text
		var buttonURL = pagelink2.trim();

		// Construct the page URL based on the button text
		var pageURL = buttonURL.toUpperCase() + '.html';

		// Redirect to the dynamically generated page URL
		window.location.href = pageURL;
	});

    // Replace the original nodes with clones
    gallery.replaceChild(clone2, image1);
    gallery.replaceChild(clone1, image2);

    swapped = Math.abs(swapped - Math.abs(index1 - index2));
    // console.log(swapped);
}

function showDetails(element) {
    if (window.innerWidth < 800) {
    	const strippedId = element.id.replace(/^0+/, '');
    	console.log(strippedId);
    	const pageURL = filtered_list[strippedId-1][4]  + '.html';
        window.location.href = pageURL;
    }
	else {
	    const test = element.id;

	    if (Number.isInteger((Number(test)+1)/5)) {
	    	const gallery = document.getElementById('imageGallery');
	    	const allImages = gallery.getElementsByClassName('image');
	    	for (const img of allImages) {
	    		if (img !== element) {
			    	img.classList.remove('clicked');
			    	img.classList.remove('large');
			    	const image_selected = img.querySelector('img');
				    const source = image_selected.src;
				    const newsource = source.replace('/WORK/Gallery-Images/WORK3x2/', '/WORK/Gallery-Images/WORK1x1/');
				    image_selected.src = newsource;
		    	}
	    	}

			if (swapped == 1 && factor !== ((Number(test)+1)/5)) {
				swap(((factor-1)*5)+3,((factor-1)*5)+2);
			}
	    	if (swapped == 2){
				swap(((factor-1)*5)+4,((factor-1)*5)+2);
			}
	    	factor = (Number(test)+1)/5;
	    	swap((test-1),(test-2));

			const floop = document.getElementById(test);

		    if (floop.classList.contains('clicked')) {
		    	floop.classList.remove('clicked');
		    	floop.classList.remove('large');
		    	const image_selected = floop.querySelector('img');
			    const source = image_selected.src;
			    const newsource = source.replace('/WORK/Gallery-Images/WORK3x2/', '/WORK/Gallery-Images/WORK1x1/');
			    image_selected.src = newsource;
		    }
		    else {
	    	    const image_selected = floop.querySelector('img');
			    const source = image_selected.src;
			    const newsource = source.replace('/WORK/Gallery-Images/WORK1x1/', '/WORK/Gallery-Images/WORK3x2/');
			    image_selected.src = newsource;
			    floop.classList.toggle('clicked');
		    	floop.classList.toggle('large');
		    }
	    }
	    else if (Number.isInteger(Number(test)/5)) {
	    	const gallery = document.getElementById('imageGallery');
	    	const allImages = gallery.getElementsByClassName('image');
	    	for (const img of allImages) {
		        if (img !== element) {
			    	img.classList.remove('clicked');
			    	img.classList.remove('large');
			    	const image_selected = img.querySelector('img');
				    const source = image_selected.src;
				    const newsource = source.replace('/WORK/Gallery-Images/WORK3x2/', '/WORK/Gallery-Images/WORK1x1/');
				    image_selected.src = newsource;
		    	}
			}
			if (swapped == 1){
				swap(((factor-1)*5)+3,((factor-1)*5)+2);
			}
			if (swapped == 2 && factor !== (Number(test)/5)) {
				swap(((factor-1)*5)+4,((factor-1)*5)+2);
			}
			factor = Number(test)/5;
			swap(Number(test-1),(test-3));

			const floop = document.getElementById(test);

		    if (floop.classList.contains('clicked')) {
		    	floop.classList.remove('clicked');
		    	floop.classList.remove('large');
		    	const image_selected = floop.querySelector('img');
			    const source = image_selected.src;
			    const newsource = source.replace('/WORK/Gallery-Images/WORK3x2/', '/WORK/Gallery-Images/WORK1x1/');
			    image_selected.src = newsource;
		    }
		    else {
	    	    const image_selected = floop.querySelector('img');
			    const source = image_selected.src;
			    const newsource = source.replace('/WORK/Gallery-Images/WORK1x1/', '/WORK/Gallery-Images/WORK3x2/');
			    image_selected.src = newsource;
			    floop.classList.toggle('clicked');
		    	floop.classList.toggle('large');
		    }
	    }

	    else {
		   	if (swapped == 2){
				swap(((factor-1)*5)+4,((factor-1)*5)+2);
			}
			if (swapped == 1){
				swap(((factor-1)*5)+3,((factor-1)*5)+2);
			}

			element = document.getElementById(test);
			const gallery = document.getElementById('imageGallery');
		    const allImages = gallery.getElementsByClassName('image');
		    const logo = document.getElementById('logo');

		    if (element.classList.contains('clicked')) {
		    	element.classList.remove('clicked');
		    	element.classList.remove('large');
		    	const image_selected = element.querySelector('img');
			    const source = image_selected.src;
			    const newsource = source.replace('/WORK/Gallery-Images/WORK3x2/', '/WORK/Gallery-Images/WORK1x1/');
			    image_selected.src = newsource;
		    }
		    else {
				for (const img of allImages) {
			        if (img !== element) {
			            img.classList.remove('clicked');
			            img.classList.remove('large');
			        }
			    }

		    // Toggle 'clicked' class only for the clicked image
		    const image_selected = element.querySelector('img');
		    const source = image_selected.src;
		    const newsource = source.replace('/WORK/Gallery-Images/WORK1x1/', '/WORK/Gallery-Images/WORK3x2/');
		    image_selected.src = newsource;
		    element.classList.toggle('clicked');
		    element.classList.toggle('large');
			}
		}
	}
}

document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before attaching the click event listener
    const contactButton = document.getElementById('contactButton');

    if (contactButton) {
        // Check if the element with id 'contactButton' exists
        contactButton.addEventListener('click', handleContactButtonClick);
    }
});

window.addEventListener("resize", function() {
    hideDropdownIfNotMobile();
    console.log("resized");
});

function handleContactButtonClick(element) {
    const head = document.getElementById('mainHeader');
    head.style.borderBottomColor = '#555';
    const testietest = document.getElementById('000001');
    console.log('Natural Width: ' + testietest.naturalWidth + ' pixels');
    console.log('Natural Height: ' + testietest.naturalHeight + ' pixels');
}

function filterImages(button) {
    const gallery = document.getElementById('imageGallery');
    const allImages = gallery.getElementsByClassName('image');
    const desiredTag = button.id.trim();
    var buttons = document.querySelectorAll('nav a');

    document.getElementById('MIX').style.color = '#D3D3D3';
    document.getElementById('JEWELLERY').style.color = '#D3D3D3';
	document.getElementById('MECHANICAL').style.color = '#D3D3D3';
	document.getElementById('INSTALLATION').style.color = '#D3D3D3';
	document.getElementById('SCULPTURE').style.color = '#D3D3D3';
	document.getElementById('CUSTOM').style.color = '#D3D3D3';
	document.getElementById('MIX ').style.color = '#D3D3D3';
    document.getElementById('JEWELLERY ').style.color = '#D3D3D3';
	document.getElementById('MECHANICAL ').style.color = '#D3D3D3';
	document.getElementById('INSTALLATION ').style.color = '#D3D3D3';
	document.getElementById('SCULPTURE ').style.color = '#D3D3D3';
	document.getElementById('CUSTOM ').style.color = '#D3D3D3';
    button.style.color = '#777';

    filtered_list = [];

    for (var i = 0; i < imagelist_all.length; i++) {
	    var itemTags = imagelist_all[i][3]; // Assuming tags are at index 2 in each sub-array

	    // Check if the desired tag is present in the current item's tags
	    if (itemTags.includes(desiredTag)) {
	        filtered_list.push(imagelist_all[i]);
	    }
	}

	emptyGallery();
    populateGallery(filtered_list);
}

function showAllImages() {
	document.getElementById('ALL').style.color = '#777';
    document.getElementById('JEWELLERY').style.color = '#D3D3D3';
	document.getElementById('MECHANICAL').style.color = '#D3D3D3';
	document.getElementById('INSTALLATION').style.color = '#D3D3D3';
	document.getElementById('SCULPTURE').style.color = '#D3D3D3';
	emptyGallery();
    populateGallery(imagelist_all);
    filtered_list = imagelist_all;
}

function createImageElement(id, src, alt, tags, title, description, buttonText, pagelink, hovertxt) {
	var imageDiv = document.createElement('div');
	imageDiv.classList.add('image');
	imageDiv.id = id;
	imageDiv.dataset.tags = tags;
	imageDiv.onclick = function () {
	showDetails(this);
	};

	var img = document.createElement('img');
	img.src = src;
	img.alt = alt;

	var detailsDiv = document.createElement('div');
	detailsDiv.classList.add('details');

	var h2 = document.createElement('h2');
	h2.textContent = title;

	var p = document.createElement('p');
	p.classList.add('p4');
	p.textContent = description;
	
	var button = document.createElement('button');
	button.textContent = buttonText || 'View Details';
	console.log(pagelink);
	button.id = 'button' + id;
	console.log(button.id);
	// Event listener for custom jewelry link
	button.addEventListener('click', function() {
		// Get the button text
		var buttonURL = pagelink.trim();

		// Construct the page URL based on the button text
		var pageURL = buttonURL.toUpperCase() + '.html';

		// Redirect to the dynamically generated page URL
		window.location.href = pageURL;
	});

	var hoverText = document.createElement('span');
    hoverText.classList.add('hover-text');
    hoverText.textContent = hovertxt; // Replace 'Your Text' with the desired text    

	detailsDiv.appendChild(h2);
	detailsDiv.appendChild(p);
	detailsDiv.appendChild(button);

	imageDiv.appendChild(img);
	imageDiv.appendChild(hoverText);
	imageDiv.appendChild(detailsDiv);
	// imageDiv.appendChild(hoverText);

	return imageDiv;
	console.log("element made");
}

// Function to populate the gallery
function populateGallery(imagelist) {
  var gallery = document.getElementById('imageGallery');

  imagelist.forEach(function(imageInfo, index) {
    var id = '00000' + (index + 1); // Adjust the padding based on the expected number of images
    var src = imageInfo[0];
    var alt = 'Image ' + (index + 1);
    var tags = imageInfo[3];
    var title = imageInfo[1];
    var description = imageInfo[2];
    var buttonText = imageInfo[5];
    var pagelink = imageInfo[4];
    var hovertxt = imageInfo[1];

    var imageElement = createImageElement(id, src, alt, tags, title, description, buttonText, pagelink, hovertxt);
    console.log(imageElement);
    gallery.appendChild(imageElement);
  });
}

function emptyGallery() {
    var gallery = document.getElementById('imageGallery');

    // Remove all child elements
    while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild);
    }
}

window.onload = function() {
	const start_button = document.getElementById('MIX');
	const start_button2 = document.getElementById('MIX ');
	start_button2.style.color = '#D3D3D3';
	filterImages(start_button);
	// populateGallery(imagelist_all);
	ScrollScript();

};

function TestFunction() {
	window.location.href = 'SHOP.html';
}

function Hamburger() {
	var menu_down = document.querySelector('.menu-down');
	menu_down.classList.toggle('active');
	var white_block = document.getElementById("mainHeader");
	var filterMenu = document.getElementById("filterMenu");

    white_block.classList.remove("expand");
 	filterMenu.style.display = "none";
	white_block.classList.toggle('visible');

	console.log('hamburger pressed')
	console.log(menu_down.classList)

}

function ScrollScript() {
	if (window.innerWidth < 800) {
		let lastScrollTop = 0;

		window.addEventListener('scroll', function() {
		let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

		let direction;
		if (currentScroll > lastScrollTop) {
		    direction = 'down';
		    document.getElementById('mainHeader').style.display= 'none';
		} else {
		    direction = 'up';
		    document.getElementById('mainHeader').style.display= 'flex';
		}

		lastScrollTop = currentScroll;
		});
	}
}



function toggleFilterMenu() {
    var filterMenu = document.getElementById("filterMenu");
    if (filterMenu.style.display === "none" || filterMenu.style.display === "") {
        filterMenu.style.display = "flex"; // Change display to flex when showing
    } else {
        filterMenu.style.display = "none";
    }
    var big_white_block = document.getElementById("mainHeader");
	big_white_block.classList.toggle('expand');

}

function filterAndHamburger(element) {
    filterImages(element);
    Hamburger();
 //    var big_white_block = document.getElementById("mainHeader");
	// big_white_block.classList.toggle('expand');

}

// Function to hide the dropdown menu if screen size is not mobile
function hideDropdownIfNotMobile() {
     var screenWidth = window.innerWidth;
    var white_block = document.getElementById("mainHeader");
    var filterMenu = document.getElementById("filterMenu");
    var menuDown = document.querySelector(".menu-down");

    if (screenWidth > 800) { // Adjust the breakpoint according to your mobile layout
        white_block.classList.remove("expand");
        filterMenu.style.display = "none";
        white_block.classList.remove('visible');
        menuDown.classList.remove('active'); // Ensure menu-down is not marked as active on larger screens
    } else {
        menuDown.style.display = ""; // Revert to default display value on smaller screens
    }
}


