/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import classnames from "classnames";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

const save = function ({ attributes, setAttributes, clientId }) {
	const blockProps = useBlockProps.save({
		className: classnames("example-block"),
	});

	return (
		<>
			<div {...blockProps}>
				{__("Wp Css App – hello from the editor!", "wp-css-app")}
			</div>
		</>
	);
};

export default save;
