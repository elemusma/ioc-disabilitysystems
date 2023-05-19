<?php 

if(have_rows('builder')): while(have_rows('builder')): the_row();
$layout = get_sub_field('layout');

if($layout == 'Content'){
    if(have_rows('content_group')): while(have_rows('content_group')): the_row();
        echo '<section class="position-relative ' . get_sub_field('classes') . '" style="' . get_sub_field('style') . '" id="' . get_sub_field('id') . '">';

            echo get_template_part('partials/bg-img');

            echo '<div class="container">';


            echo '<div class="row justify-content-center ' . get_sub_field('row_classes') . '" style="' . get_sub_field('row_style') . '">';

                echo get_template_part('partials/content-block');

            echo '</div>';

            echo '</div>';

        echo '</section>';
    endwhile; endif;
} elseif($layout == 'Relationship') {
    if(have_rows('relationship_group')): while(have_rows('relationship_group')): the_row();
        echo '<section class="position-relative ' . get_sub_field('classes') . '" style="' . get_sub_field('style') . '" id="' . get_sub_field('id') . '">';

            echo get_template_part('partials/bg-img');

            echo '<div class="container">';


            
            $relationship = get_sub_field('relationship');
            
            if( $relationship ):
                echo '<div class="row justify-content-center ' . get_sub_field('row_classes') . '" style="' . get_sub_field('row_style') . '">';
                    foreach( $relationship as $post ):
                    // Setup this post for WP functions (variable must be named $post).
                    setup_postdata($post);
                    echo '<div class="col-lg-4 position-relative text-center col-relationship" style="padding-top:15px;padding-bottom:15px;">';

                    echo '<a href="' . get_the_permalink() . '" class="position-relative overflow-h col-relationship-link img-hover" style="padding-top:150px;padding-bottom:150px;display: inherit;text-decoration:none;">';
                    the_post_thumbnail('full',array(
                        'class'=>'position-absolute w-100 h-100',
                        'style'=>'top:0;left:0;object-fit:cover;'
                    ));

                    echo '<div class="position-absolute bg-black w-100 h-100 col-relationship-overlay" style="top:0;left:0;opacity:.5;transition:all .25s ease-in-out;pointer-events:none;"></div>';
                    echo '<div class="position-relative">';
                        echo '<h3 class="text-white text-shadow" style="font-family: proxima_novabold;text-transform:uppercase;">' . get_the_title() . '</h3>';
                    echo '</div>';
                    // echo '<hr class="mt-2">';
                    echo '</a>';
                    echo '</div>';
                    endforeach;
                // Reset the global post object so that the rest of the page works correctly.
                wp_reset_postdata(); 
                echo '</div>';
            endif;


            echo '</div>';

        echo '</section>';
    endwhile; endif;
} elseif($layout == 'Products'){
    if(have_rows('products_group')): while(have_rows('products_group')): the_row();
    echo '<section class="position-relative ' . get_sub_field('classes') . '" style="background:#ebebeb;' . get_sub_field('style') . '" id="' . get_sub_field('id') . '">';

            echo get_template_part('partials/bg-img');

            echo '<div class="container">';
            if(have_rows('products_repeater')):
            echo '<div class="row justify-content-center ' . get_sub_field('row_classes') . '" style="' . get_sub_field('row_style') . '">';
            while(have_rows('products_repeater')): the_row();

            echo '<div class="col-lg-4 col-md-6 position-relative col-products" style="padding-top:15px;padding-bottom:15px;">';

            echo '<div class="position-relative box-shadow" style="background:white;padding:15px;">';

            $img = get_sub_field('image');
            echo wp_get_attachment_image($img['id'],'full','',[
                'class'=>'w-100',
                'style'=>'height:175px;object-fit:cover;'
            ]);

            echo '<h2 class="bold" style="font-size:1.5rem;">' . get_sub_field('title') . '</h2>';

            echo '<div class="small">';
                echo get_sub_field('description');
            echo '</div>';

            $link = get_sub_field('link');
            if( $link ): 
            $link_url = $link['url'];
            $link_title = $link['title'];
            $link_target = $link['target'] ? $link['target'] : '_self';

            if(!$link_title){
                echo '<a class="btn-main outline" href="' . esc_url( $link_url ) . '" target="' . esc_attr( $link_target ) . '">Shop Now</a>';
            } else {
                echo '<a class="btn-main outline" href="' . esc_url( $link_url ) . '" target="' . esc_attr( $link_target ) . '">' . esc_html( $link_title ) . '</a>';
            }
            endif;

            echo '</div>';
            echo '</div>'; // end of col

            endwhile;
            echo '</div>';
            endif;
            echo '</div>';


    echo '</section>';
    endwhile; endif;
} elseif($layout == 'Galleries'){
    if(have_rows('galleries_group')): while(have_rows('galleries_group')): the_row();
    echo '<section class="position-relative ' . get_sub_field('classes') . '" style="' . get_sub_field('style') . '" id="' . get_sub_field('id') . '">';

            echo get_template_part('partials/bg-img');

            echo '<div class="container">';

            echo '<div class="row justify-content-center ' . get_sub_field('row_classes') . '" style="' . get_sub_field('row_style') . '">';

        // start of first project gallery
if(have_rows('gallery_repeater')):
    $galleryCounter = 0;
    while(have_rows('gallery_repeater')): the_row();
    $galleryCounter++;
    $gallery = get_sub_field('gallery');
    
    if($galleryCounter == 1){
    echo '<div class="col-md-8 mb-md-0 mb-4 position-relative" style="margin: 15px 0;">';

    
    
    if($gallery):
        echo '<div class="projects-carousel owl-carousel owl-theme arrows-middle">';
        foreach($gallery as $image):
    echo '<a href="' . wp_get_attachment_image_url($image['id'], 'full') . '" data-lightbox="image-set-' . $galleryCounter . '" class="d-block position-relative overflow-h">';
    
    
    
    
    echo '<div class="position-relative img-hover w-100">';
    echo wp_get_attachment_image($image['id'], 'full','',[
        'class'=>'w-100',
        'style'=>'height:700px;object-fit:cover;'
    ] );

    echo '<div class="position-absolute w-100 h-100 overlay" style="top:0;left:0;background:black;opacity:.25;"></div>';

    echo '</div>';
    
    echo '</a>';
        endforeach;
        echo '</div>';
    endif;

    echo '<div class="position-absolute w-100 z-1 d-flex h-100 justify-content-center align-items-center" style="transform:translate(0px, 0px);pointer-events:none;top:0;">';
    echo '<span class="text-white bold text-shadow" style="white-space:nowrap;font-size:1.5rem;">' . get_sub_field('title') . '</span>';
    echo '</div>';
    
    echo '</div>';
    }
    endwhile;
    endif;
    // end of first project gallery
    
    
    // start of second project gallery
    if(have_rows('gallery_repeater')):
    echo '<div class="col-md-4 col-second-gallery position-relative" style="margin: 15px 0;">';
    $galleryCounter2 = 0;
    while(have_rows('gallery_repeater')): the_row();
    $galleryCounter2++;
    $gallery = get_sub_field('gallery');
    
    if($galleryCounter2 > 1 && $galleryCounter2 < 4){
    // echo '<div class="col-md-8 mb-md-0 mb-4">';
    
    if($gallery):
        echo '<div class="position-relative">';

        echo '<div class="projects-carousel owl-carousel owl-theme arrows-middle">';
        foreach($gallery as $image):
    echo '<a href="' . wp_get_attachment_image_url($image['id'], 'full') . '" data-lightbox="image-set-' . $galleryCounter2 . '" class="d-block position-relative overflow-h">';
    
    
    echo '<div class="position-relative img-hover w-100">';

    echo wp_get_attachment_image($image['id'], 'full','',[
        'class'=>'w-100',
        'style'=>'height:345px;object-fit:cover;'
    ] );

    echo '<div class="position-absolute w-100 h-100 overlay" style="top:0;left:0;background:black;opacity:.25;"></div>';

    echo '</div>';
    
    echo '</a>';
        endforeach;
        echo '</div>';

        echo '<div class="position-absolute w-100 z-1 d-flex h-100 justify-content-center align-items-center" style="transform:translate(0px, 0px);pointer-events:none;top:0;">';
        echo '<span class="text-white bold text-shadow" style="white-space:nowrap;font-size:1.5rem;">' . get_sub_field('title') . '</span>';
        echo '</div>';

        echo '</div>';
    endif;
    
    // echo '</div>';
    }
    endwhile;
    echo '</div>';
    endif;
    // end of second project gallery
    
    
    
    // start of third project gallery
    if(have_rows('gallery_repeater')):
    
    $galleryCounter3 = 0;
    while(have_rows('gallery_repeater')): the_row();
    $galleryCounter3++;
    $gallery = get_sub_field('gallery');
    
    if($galleryCounter3 > 3){
    echo '<div class="col-md-4 mt-4 position-relative" style="margin: 15px 0;">';
    
    if($gallery):
        echo '<div class="projects-carousel owl-carousel owl-theme arrows-middle">';
        foreach($gallery as $image):
    echo '<a href="' . wp_get_attachment_image_url($image['id'], 'full') . '" data-lightbox="image-set-' . $galleryCounter3 . '" class="d-block position-relative overflow-h">';
    
    echo '<div class="position-absolute w-100 z-1 d-flex h-100 justify-content-center align-items-center" style="transform:translate(0px, 0px);pointer-events:none;">';
    echo '<span class="text-white bold text-shadow" style="white-space:nowrap;font-size:1.5rem;">' . get_sub_field('title') . '</span>';
    echo '</div>';
    
    
    echo '<div class="position-relative img-hover w-100">';

    echo wp_get_attachment_image($image['id'], 'full','',[
        'class'=>'w-100',
        'style'=>'height:350px;object-fit:cover;'
    ] );

    echo '<div class="position-absolute w-100 h-100 overlay" style="top:0;left:0;background:black;opacity:.25;"></div>';

    echo '</div>';
    
    echo '</a>';
        endforeach;
        echo '</div>';
    endif;
    
    echo '</div>';
    }
    endwhile;
    endif;
    // end of third project gallery

    echo '</div>';
    echo '</div>';

    echo '</section>';
    endwhile; endif;
} elseif($layout == 'Tabs'){
    if(have_rows('tabs_group')): while(have_rows('tabs_group')): the_row();
    echo '<section class="position-relative ' . get_sub_field('classes') . '" style="padding:50px 0px;' . get_sub_field('style') . '" id="' . get_sub_field('id') . '">';

            echo get_template_part('partials/bg-img');

            echo '<div class="container">';


            if(have_rows('tabs_repeater')):
            echo '<div class="row justify-content-center ' . get_sub_field('row_classes') . '" style="' . get_sub_field('row_style') . '">';
            $tabsCounter = 0;
            while(have_rows('tabs_repeater')): the_row();
            $tabsCounter++;
                // <div class="col-lg-4 col-md-6"></div>

                $link = get_sub_field('link');

                if( $link ): 
                $link_url = $link['url'];
                $link_title = $link['title'];
                $link_target = $link['target'] ? $link['target'] : '_self';

                // if($link_title == '#'){
                echo '<a class="col-lg-3 text-center bold position-relative col-tabs" style="background:#dcdddf;color:#868686;text-decoration:none;padding:50px 0;" href="' . esc_url( $link_url ) . '" target="' . esc_attr( $link_target ) . '">';
                echo esc_html( $link_title );

                if($tabsCounter > 1){
                    echo '<div class="position-absolute h-100" style="
                    left:0;
                    top:0;
                    width:3px;
                    transform: translate(-50%, 0px);
                    background: white;"></div>';

                    echo '<div class="position-absolute" style="
                    left:-50px;
                    top:50%;
                    height:3px;
                    width:100px;
                    transform: translate(0, -50%);
                    background: white;"></div>';
                }

                echo '</a>';
                // } else {
                    // echo '<a class="btn-main outline" href="' . esc_url( $link_url ) . '" target="' . esc_attr( $link_target ) . '">' . esc_html( $link_title ) . '</a>';
                // }
                endif;

            endwhile;
            echo '</div>';
            endif;

            echo '</div>';

    echo '</section>';
    endwhile; endif;
} elseif($layout == 'Two Columns') {
    if(have_rows('two_columns_group')): while(have_rows('two_columns_group')): the_row();
    echo '<section class="position-relative ' . get_sub_field('classes') . '" style="padding:50px 0px;' . get_sub_field('style') . '" id="' . get_sub_field('id') . '">';

        echo get_template_part('partials/bg-img');

            echo '<div class="container">';

            echo '<div class="row justify-content-center ' . get_sub_field('row_classes') . '" style="' . get_sub_field('row_style') . '">';

            if(have_rows('column_left')): while(have_rows('column_left')): the_row();

            echo '<div class="col-lg-6 ' . get_sub_field('column_classes') . '" style="' . get_sub_field('column_style') . '">';

            echo get_template_part('partials/bg-img');

            echo '<div data-aos="fade-up">';
            echo get_sub_field('content');
            echo '</div>';
            echo '</div>';

            endwhile; endif;

            if(have_rows('column_right')): while(have_rows('column_right')): the_row();

            echo '<div class="col-lg-6 ' . get_sub_field('column_classes') . '" style="' . get_sub_field('column_style') . '">';

            echo get_template_part('partials/bg-img');

            echo '<div data-aos="fade-up">';
            echo get_sub_field('content');
            echo '</div>';
            echo '</div>';

            endwhile; endif;

            echo '</div>';

            echo '</div>';

    echo '</section>';
    endwhile; endif;
}

endwhile; endif;

?>