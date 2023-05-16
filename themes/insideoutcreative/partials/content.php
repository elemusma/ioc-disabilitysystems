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


            echo '<div class="row justify-content-center ' . get_sub_field('row_classes') . '" style="' . get_sub_field('row_style') . '">';

                echo get_template_part('partials/content-block');

            echo '</div>';

            echo '</div>';

        echo '</section>';
    endwhile; endif;
}

endwhile; endif;

?>