<?php

echo '<div class="col-lg-9 text-center ' . get_sub_field('column_classes') . '" style="' . get_sub_field('column_style') . '">';
echo '<div data-aos="fade-up">';
echo get_sub_field('content');
echo '</div>';
echo '</div>';

?>