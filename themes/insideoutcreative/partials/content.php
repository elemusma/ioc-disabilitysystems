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
                    echo '<div class="col-lg-4 position-relative text-center col-relationship img-hover" style="padding-top:15px;padding-bottom:15px;">';

                    echo '<a href="' . get_the_permalink() . '" class="position-relative overflow-h" style="padding-top:100px;padding-bottom:100px;display: inherit;text-decoration:none;">';
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
}

endwhile; endif;

?>