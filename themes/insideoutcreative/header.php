<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php 

if(get_field('header', 'options')) { the_field('header', 'options'); }
if(get_field('header_code')) { the_field('header_code'); }

if(get_field('custom_css')) { 
?> 
<style>
<?php the_field('custom_css'); ?>
</style>
<?php 
}
wp_head(); 
?>
</head>
<body <?php body_class(); ?>>
<?php

if(get_field('body','options')) { the_field('body','options'); }
if(get_field('body_code')) { the_field('body_code'); }
echo '<div class="blank-space"></div>';
// echo '<header class="" style="top:0;left:0;">';

echo '<nav class="nav position-fixed w-100" style="top:0;left:0;z-index:3;">';
echo '<div class="box-shadow" style="background:white;">';
echo '<div class="container-fluid">';
echo '<div class="row align-items-center">';

echo '<div class="col-lg-3 col-12 text-center">';
echo '<a href="' . home_url() . '" aria-label="home link">';

$logo = get_field('logo','options'); 
if($logo){
echo wp_get_attachment_image($logo['id'],'full',"",[
    'class'=>'h-auto',
    'style'=>'width:275px;max-width:100%;transition:all 1s ease-in-out;',
    'id'=>'logo-main']); 
}

echo '</a>';
echo '</div>';

echo '<div class="col-7 mobile-hidden">';

// wp_nav_menu(array(
//     'menu' => 'primary',
//     'menu_class'=>'menu d-flex flex-wrap list-unstyled justify-content-center'
// ));

echo '<div class="row justify-content-center">';

echo '<div class="col-lg-3 text-center" style="margin-bottom:15px;">';
    echo '<a href="' . home_url() . '/" style="color:#737272;text-decoration:none;">Home</a>';
    echo '<div class="position-absolute bg-accent-secondary h-100" style="width:1px;top:0;right:0;"></div>';
echo '</div>';
echo '<div class="col-lg-3 text-center" style="margin-bottom:15px;">';
    echo '<a href="' . home_url() . '/commercial-ramps/" style="color:#737272;text-decoration:none;">Commercial Ramps/Stairs</a>';
    echo '<div class="position-absolute bg-accent-secondary h-100" style="width:1px;top:0;right:0;"></div>';
echo '</div>';
echo '<div class="col-lg-3 text-center" style="margin-bottom:15px;">';
    echo '<a href="' . home_url() . '/door-controls/" style="color:#737272;text-decoration:none;">Door Controls</a>';
    echo '<div class="position-absolute bg-accent-secondary h-100" style="width:1px;top:0;right:0;"></div>';
echo '</div>';
echo '<div class="col-lg-3 text-center" style="margin-bottom:15px;">';
    echo '<a href="' . home_url() . '/door-openers/" style="color:#737272;text-decoration:none;">Door Openers</a>';
echo '</div>';
echo '<div class="col-lg-3 text-center" style="">';
    echo '<a href="' . home_url() . '/portable-ramps/" style="color:#737272;text-decoration:none;">Portable Ramps</a>';
    echo '<div class="position-absolute bg-accent-secondary h-100" style="width:1px;top:0;right:0;"></div>';
echo '</div>';
echo '<div class="col-lg-3 text-center" style="">';
    echo '<a href="' . home_url() . '/resources/" style="color:#737272;text-decoration:none;">Resources</a>';
    echo '<div class="position-absolute bg-accent-secondary h-100" style="width:1px;top:0;right:0;"></div>';
echo '</div>';
echo '<div class="col-lg-3 text-center" style="">';
    echo '<a href="' . home_url() . '/modular-ramps/" style="color:#737272;text-decoration:none;">Modular Ramps</a>';
    echo '<div class="position-absolute bg-accent-secondary h-100" style="width:1px;top:0;right:0;"></div>';
echo '</div>';
echo '<div class="col-lg-3 text-center" style="">';
    echo '<a href="' . home_url() . '/contact/" style="color:#737272;text-decoration:none;">Contact</a>';
echo '</div>';

echo '</div>';


echo '</div>';

echo '<div class="col-4 desktop-hidden">';
echo '<a id="navToggle" class="nav-toggle">';
echo '<div>';
echo '<div class="line-1 bg-accent"></div>';
echo '<div class="line-2 bg-accent"></div>';
echo '<div class="line-3 bg-accent"></div>';
echo '</div>';
echo '</a>';
echo '</div>';

echo '<div class="col-lg-2 col-8 d-flex align-items-center justify-content-end">';

echo get_template_part('partials/icon-shopping-cart');

if(is_page(183) || is_page(98) || is_page(86)) {
    echo '<a href="' . home_url() . '/quick-quote/" class="text-accent-secondary-dark bold quick-quote-link" style="
    transition:all .25s ease-in-out;
    text-decoration:none;
    background: var(--accent-primary);
    padding: 10px 35px;
    clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
    -ms-clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
    -moz-clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
    -webkit-clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
    ">Quick Quote</a>';
} else {
    echo '<a href="' . home_url() . '/contact/" class="text-accent-secondary-dark bold quick-quote-link" style="
    transition:all .25s ease-in-out;
    text-decoration:none;
    background: var(--accent-primary);
    padding: 10px 35px;
    clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
    -ms-clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
    -moz-clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
    -webkit-clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
    ">Contact</a>';
}

echo '</div>';



echo '<div id="navMenuOverlay" class="position-fixed z-2"></div>';
echo '<div class="col-lg-4 col-md-8 col-11 nav-items bg-white desktop-hidden" id="navItems">';

echo '<div class="pt-5 pb-5">';
echo '<div class="close-menu">';
echo '<div>';
echo '<span id="navMenuClose" class="close h2 text-gray" style="float:right;">X</span>';
echo '</div>';
echo '</div>';
echo '<a href="' . home_url() . '">';

$logo = get_field('logo','options'); 
if($logo){
echo wp_get_attachment_image($logo['id'],'full',"",['class'=>'w-100 h-auto','style'=>'max-width:250px;']);
}

echo '</a>';
echo '</div>';

wp_nav_menu(array(
    'menu' => 'primary',
    'menu_class'=>'menu list-unstyled mb-0'
));

echo '<div style="width:50px;">';
echo get_template_part('partials/icon-shopping-cart');
echo '</div>';

echo '</div>'; // end of col for navigation



echo '</div>';
echo '</div>';
echo '</div>'; // end of primary nav

// start of secondary nav

// wp_nav_menu(array(
//     'menu' => 'secondary',
//     'menu_class'=>'menu list-unstyled mb-0 d-flex justify-content-center flex-wrap',
//     'link_class' => 'text-accent bold'
// ));

// end of secondary nav


echo '</nav>';

echo '<main>';
// echo '</header>';

// echo '<section class="hero position-relative">';
// $globalPlaceholderImg = get_field('global_placeholder_image','options');
// if(is_page()){
// if(has_post_thumbnail()){
// the_post_thumbnail('full', array('class' => 'w-100 h-100 bg-img position-absolute'));
// } else {
// echo wp_get_attachment_image($globalPlaceholderImg['id'],'full','',['class'=>'w-100 h-100 bg-img position-absolute']);
// }
// } else {
// echo wp_get_attachment_image($globalPlaceholderImg['id'],'full','',['class'=>'w-100 h-100 bg-img position-absolute']);
// }


// if(is_front_page()) {
// echo '<div class="pt-5 pb-5 text-white text-center">';
// echo '<div class="position-relative">';
// echo '<div class="multiply overlay position-absolute w-100 h-100 bg-img"></div>';
// echo '<div class="position-relative">';
// echo '<div class="container">';
// echo '<div class="row">';
// echo '<div class="col-12">';
// echo '<h1 class="pt-3 pb-3 mb-0">' . get_the_title() . '</h1>';
// echo '</div>';
// echo '</div>';
// echo '</div>';
// echo '</div>';
// echo '</div>';
// echo '</div>';
// }



// if(!is_front_page()) {
// echo '<div class="container pt-5 pb-5 text-white text-center">';
// echo '<div class="row">';
// echo '<div class="col-md-12">';
// if(is_page() || !is_front_page()){
// echo '<h1 class="">' . get_the_title() . '</h1>';
// } elseif(is_single()){
// echo '<h1 class="">' . single_post_title() . '</h1>';
// } elseif(is_author()){
// echo '<h1 class="">Author: ' . get_the_author() . '</h1>';
// } elseif(is_tag()){
// echo '<h1 class="">' . get_single_tag_title() . '</h1>';
// } elseif(is_category()){
// echo '<h1 class="">' . get_single_cat_title() . '</h1>';
// } elseif(is_archive()){
// echo '<h1 class="">' . get_archive_title() . '</h1>';
// }
// elseif(!is_front_page() && is_home()){
// echo '<h1 class="">' . get_the_title(133) . '</h1>';
// }
// echo '</div>';
// echo '</div>';
// echo '</div>';
// }

// echo '</section>';
?>