// init Isotope
var $container = $('.portfolio-items').isotope('layout');

$('.portfolio-filter').on( 'click', 'a', function(e) {
	e.preventDefault();
	var filterValue = $(this).attr('data-filter');
	$container.isotope({ filter: filterValue });

	$('.portfolio-filter li').removeClass('active');
	$(this).closest('li').addClass('active');
});



function cpp() {

    alert("Learned how to build various data-storage structures using C++ in CS225: Data Structures");
}

function java() {

    alert("Learned basic concepts in computing and fundamental techniques for solving computational problems");
}

function python() {

    alert("Learned concepts in computing and fundamental techniques for solving computational problems in Python");
}

function webd() {

    alert("Basic front-end web development skills");
}

function rl() {

    alert("Applied probability theory and statistics with R");
}

function ruby() {

    alert("Self-studied Ruby Language with the RPG Maker scripting system (RGSS)");
}

function ccna() {

    alert("CCNA (Cisco Certified Network Associate) is an IT certification from Cisco. CCNA certification is an associate-level Cisco Career certification");
}

function ocjp() {

    alert("Oracle Certified Java Programmer (OCJP) is Oracle Certification for Java Programmer");
}

function lpic() {

    alert("LPIC-1 is the first certification in LPI’s multi-level Linux professional certification program. The LPIC-1 will validate the candidate's ability to perform maintenance tasks on the command line, install and configure a computer running Linux and configure basic networking");

}

function dw() {

    alert("Can create design-based websites with Dreamweaver");

}

function ps() {

    alert("Can utilize Photoshop to do some designing");

}

function rpg() {

    alert("Can create 2D Role Playing Games with RPG Maker");

}

function gs() {

    alert("Worked at a company called GS Sports for 3 months as an IT Assistant");
}

function rok() {

    alert("Served for 21 months and discharged with honor at the Cyber Command of the Republic of Korea Army");
}




