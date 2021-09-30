<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Upwork-theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="header">
	<div class="container">
		<div class="header_row">
			<div class="header_col">
				<?php the_custom_logo(); ?>
				<a href="/" class="sticky_logo">
					<img src="http://upwork-landing.test/wp-content/uploads/2021/09/sticky-logo.svg" alt="Logo">
				</a>
			</div>
			<div class="header_col">
				<nav class="main_navigation">
				<?php
					wp_nav_menu(
						array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
							'container'        => false,
						)
					);
				?>
				</nav>
				<a href="#" class="show_mobile_menu">
					<span></span>
					<span></span>
					<span></span>
				</a>
			</div>
		</div>
	</div>
	<nav class="mobile_navigation">
		<a href="/" class="sticky_logo">
			<img src="http://upwork-landing.test/wp-content/uploads/2021/09/sticky-logo.svg" alt="Logo">
		</a>
		<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
					'container'        => false,
				)
			);
		?>
	</nav>
</header>

