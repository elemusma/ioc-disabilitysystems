<?php
echo '<footer>';
echo '<section class="pt-5">';
echo '<div class="container">';
echo '<div class="row justify-content-center align-items-center">';
echo '<div class="col-lg-3 text-center pb-5">';
echo '<a href="' . home_url() . '">';

$logo = get_field('logo','options'); 
$logoFooter = get_field('logo_footer','options'); 

if($logoFooter){
echo wp_get_attachment_image($logoFooter['id'],'full',"",['class'=>'w-100 h-auto']); 
} elseif($logo) {
echo wp_get_attachment_image($logo['id'],'full',"",['class'=>'w-100 h-auto']);
}

echo '</a>';
echo '</div>';

echo '<div class="col-lg-9 position-relative">';

echo '<div class="footer-menu-contact">';
wp_nav_menu(array(
    'menu' => 'footer',
    'menu_class'=>'menu d-flex flex-wrap list-unstyled justify-content-start'
));

echo '<div class="vertical-line position-absolute bg-accent-secondary h-100" style="
width:1px;
top:20px;
left:20px;"></div>';

echo '<div class="horizontal-line position-absolute bg-accent-secondary w-100" style="height:1px;
top: 65%;
left: 0;
transform: translate(0px, -50%);"></div>';

echo '<div class="d-flex">';

echo '<span style="padding-right:25px;"><strong>Phone</strong>: <a href="tel:+' . get_field('phone','option') . '">' . get_field('phone','option') . '</a></span>';

echo '<span class="text-accent-secondary" style="padding-right:25px;">|</span>';

echo '<span><strong>Email</strong>: <a href="tel:+' . get_field('email','option') . '">' . get_field('email','option') . '</a></span>';

echo '</div>';

echo '</div>';



echo '</div>';

echo '<div class="col-lg-12 text-center"  style="padding-top:45px;">';

echo get_field('website_message','option');

echo '</div>';

echo '</div>';
echo '</div>';
echo '</section>';


echo '<div class="bg-gray text-center" style="padding:25px 15px;">';
    echo '<div class="d-flex justify-content-center align-items-center">';
        echo '<a href="https://insideoutcreative.io/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;" class="">';
        echo '<img src="https://insideoutcreative.io/wp-content/uploads/2023/05/created-by-inside-out-creative-icon.png" style="width:25px;" class="h-auto ml-2" alt="">';
        echo '<p class="text-white" style="margin:0px;"><small>Created by Inside Out Creative</small></p>';
        // echo '<img src="https://insideoutcreative.io/wp-content/uploads/2022/06/created-by-inside-out-creative-black.png" style="width:150px;" class="h-auto ml-2" alt="">';
        echo '</a>';
    echo '</div>';
echo '</div>';
echo '</footer>';

if(get_field('footer', 'options')) { the_field('footer', 'options'); }
if(get_field('footer_code')) { the_field('footer_code'); }

wp_footer();

echo '</main>';
echo '</body>';
echo '</html>';
?>