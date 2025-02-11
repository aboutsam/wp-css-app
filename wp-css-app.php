<?php

/**
 * Plugin Name:       Wp Css App
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-css-app
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_wp_css_app_block_init() {
	register_block_type(__DIR__ . '/build/wp-css-app');
}
add_action('init', 'create_block_wp_css_app_block_init');


function wp_css_app_add_admin_menu() {
	add_menu_page(
		'WP Css App',      // Page title
		'Css Settings',    // Menu title
		'manage_options',      // Capability
		'wp-css-app',      // Menu slug
		'wp_css_app_settings_page', // Function to display the settings page
		'dashicons-admin-network', // Icon
		100 // Position
	);
}
add_action('admin_menu', 'wp_css_app_add_admin_menu');

function wp_css_app_settings_page() {
?>
	<div class="wrap">
		<h1><?php esc_html_e('WP Css App Settings', 'wp-css-app'); ?></h1>
		<form method="post" action="options.php">
			<?php
			settings_fields('wp_css_app_settings_group');
			do_settings_sections('wp-css-app');
			submit_button();
			?>
		</form>
	</div>
<?php
}

function wp_css_app_register_settings() {
	register_setting('wp_css_app_settings_group', 'wp_css_app_license_key');

	add_settings_section(
		'wp_css_app_settings_section',
		__('License Key', 'wp-css-app'),
		'',
		'wp-css-app'
	);

	add_settings_field(
		'wp_css_app_license_key_field',
		__('Enter License Key', 'wp-css-app'),
		'wp_css_app_license_key_field_callback',
		'wp-css-app',
		'wp_css_app_settings_section'
	);
}
add_action('admin_init', 'wp_css_app_register_settings');

function wp_css_app_license_key_field_callback() {
	$license_key = get_option('wp_css_app_license_key', '');
	echo '<input type="text" name="wp_css_app_license_key" value="' . esc_attr($license_key) . '" style="width: 300px;">';
}
