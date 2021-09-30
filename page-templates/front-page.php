<?php
/**
 * Template Name: Home Page
 */

get_header();

$intro_section = get_field( 'intro_section' );
$images_section = get_field( 'images_section' );
$the_building_section = get_field( 'the_building_section' );
$location_section = get_field( 'map_section' );
?>

<section class="intro_section" id="header" style="background-image: url('<?php echo $intro_section['image']['url']; ?>')">
    <div class="container">
        <div class="intro_flex">
        <h1 class="section_title wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.7s"><?php echo $intro_section['title']; ?></h1>
        </div>
    </div>
</section>

<section class="images_section">
    <div class="container">
        <div class="images_flex">
            <?php foreach ( $images_section['images'] as $image ) { ?>
                <div class="image_col">
                    <img class="lazy" data-src="<?php echo $image['image']['url']; ?>"  alt="<?php echo $image['image']['alt']; ?>">
                </div>
            <?php } ?>
        </div>
    </div>
</section>

<section class="the_building_section" id="the_building">
    <div class="the_building_left_bg">
        <img class="lazy" data-src="<?php echo $the_building_section['left_image']['url']; ?>" alt="<?php echo $the_building_section['left_image']['alt']; ?>">
    </div>
	<div class="the_building_right_bg">
        <img class="lazy" data-src="<?php echo $the_building_section['right_image']['url']; ?>" alt="<?php echo $the_building_section['right_image']['alt']; ?>">
    </div>

    <div class="container">
        <h2 class="section_title wow fadeIn"><?php echo $the_building_section['title']; ?></h2>
        <div class="section_text wow fadeIn">
            <?php echo $the_building_section['text']; ?>
        </div>
    </div>
</section>

<section class="location_section" id="location">
    <div class="container">
        <div class="location_flex">
            <div class="location_col"><h2 class="section_title wow fadeIn"><?php echo $location_section['title']; ?></h2></div>
            <div class="location_col">
                <div class="location_section_text wow fadeIn">
                    <p><?php echo $location_section['text']; ?></p>
                </div>
            </div>
        </div>
        <div class="location_iframe">
            <?php echo $location_section['map_code']; ?>
        </div>
    </div>
    <div class="location_bottom_left">
        <img class="lazy" data-src="<?php echo $location_section['left_image']['url']; ?>" alt="<?php echo $location_section['left_image']['alt']; ?>">
    </div>
    <div class="location_bottom_right">
        <img class="lazy" data-src="<?php echo $location_section['right_image']['url']; ?>" alt="<?php echo $location_section['right_image']['alt']; ?>">
    </div>
</section>


<?php
get_footer();