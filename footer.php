<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Upwork-theme
 */

$footer_section = get_field( 'footer_section' );

?>

<footer  class="footer">
	<div class="footer_left_bg">
        <img class="lazy" data-src="<?php echo $footer_section['left_image']['url']; ?>" alt="<?php echo $footer_section['left_image']['alt']; ?>">
    </div>
	<div class="footer_right_bg">
        <img class="lazy" data-src="<?php echo $footer_section['right_image']['url']; ?>" alt="<?php echo $footer_section['right_image']['alt']; ?>">
    </div>

	<div class="container">
		<div class="footer_top" id="contact">
			<h2 class="section_title wow fadeIn"><?php echo $footer_section['title']; ?></h2>
		</div>
		<div class="footer_middle">
			<?php foreach ( $footer_section['address_block'] as $address ) { ?>
				<div class="footer_address">
					<h3 class="city wow fadeIn"><?php echo $address['address_item']['city']; ?></h3>
					<div class="address_flex wow fadeIn">
						<?php foreach ( $address['address_item']['contacts'] as $contacts ) { ?>
							<div class="address_item">
								<h4 class="title"><?php echo $contacts['address']; ?></h4>
								<a href="mailto:<?php echo $contacts['email']; ?>" class="email"><?php echo $contacts['email']; ?></a>
								<a href="tel:<?php echo $contacts['phone']; ?>" class="phone"><?php echo $contacts['phone']; ?></a>
							</div>
						<?php } ?>
					</div>
				</div>
            <?php } ?>
		</div>
		<div class="copyright">
			<p><?php echo $footer_section['copyright']; ?></p>
		</div>
	</div>

	<div class="footer_bottom_left">
        <img class="lazy" data-src="<?php echo $footer_section['left_bottom_image']['url']; ?>" alt="<?php echo $footer_section['left_bottom_image']['alt']; ?>">
    </div>
	<div class="footer_bottom_right">
        <img class="lazy" data-src="<?php echo $footer_section['right_bottom_image']['url']; ?>" alt="<?php echo $footer_section['right_bottom_image']['alt']; ?>">
    </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>
