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

echo '<div class="col-md-4 col-6 text-center">';
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

echo '<div class="col-lg-4 col-6 mobile-hidden">';

wp_nav_menu(array(
    'menu' => 'primary',
    'menu_class'=>'menu d-flex list-unstyled justify-content-center'
));


echo '</div>';

echo '<div class="col-md-4 col-6 desktop-hidden">';
echo '<a id="navToggle" class="nav-toggle">';
echo '<div>';
echo '<div class="line-1 bg-accent"></div>';
echo '<div class="line-2 bg-accent"></div>';
echo '<div class="line-3 bg-accent"></div>';
echo '</div>';
echo '</a>';
echo '</div>';

echo '<div class="col-md-4 col-12 d-flex align-items-center justify-content-end">';

echo '<a style="width:35px;margin-right:15px;" class="cart-icon" href="https://store.disabilitysystems.com/view_cart.asp" target="_blank">';
echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>';
echo '</a>';

echo '<a href="' . home_url() . '/quick-quote" class="text-accent-secondary-dark bold quick-quote-link" style="
transition:all .25s ease-in-out;
text-decoration:none;
background: var(--accent-primary);
padding: 10px 55px;
clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
-ms-clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
-moz-clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
-webkit-clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
">Quick Quote</a>';

echo '</div>';



echo '<div id="navMenuOverlay" class="position-fixed z-2"></div>';
echo '<div class="col-lg-4 col-md-8 col-11 nav-items bg-white desktop-hidden" id="navItems">';

echo '<div class="pt-5 pb-5">';
echo '<div class="close-menu">';
echo '<div>';
echo '<span id="navMenuClose" class="close h1">X</span>';
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

echo '</div>'; // end of col for navigation



echo '</div>';
echo '</div>';
echo '</div>'; // end of primary nav

// start of secondary nav

wp_nav_menu(array(
    'menu' => 'secondary',
    'menu_class'=>'menu list-unstyled mb-0 d-flex justify-content-center flex-wrap',
    'link_class' => 'text-accent bold'
));

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