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
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
const { useState, useEffect, Fragment } = wp.element;
import {
	SelectControl,
	BaseControl,
	PanelBody,
	__experimentalInputControl as InputControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
const Edit = function ({ attributes, setAttributes, clientId }) {
	const [size, setSize] = useState("50%");

	const { inputValue, selectValue } = attributes;

	// outer div
	const blockProps = useBlockProps({
		className: classnames("example-block"),
	});

	return (
		<>
			<Fragment>
				<InspectorControls>
					<PanelBody title={__("Test Section 2", "wp-css")}>
						<SelectControl
							label="Size"
							value={selectValue}
							options={[
								{ label: "Layout 1", value: "layout-one" },
								{ label: "Layout 2", value: "layout-two" },
								{ label: "Layout 3", value: "layout-three" },
							]}
							onChange={(newSize) => setAttributes({ selectValue: newSize })}
							__next40pxDefaultSize
							__nextHasNoMarginBottom={true}
						/>
					</PanelBody>
					<PanelBody
						className={"xdisable-panelbody"}
						title={__("Test Section 2", "wp-css")}
					>
						<BaseControl>
							<InputControl
								label={"Test Input"}
								value={inputValue}
								onChange={(newValue) => setAttributes({ inputValue: newValue })}
							/>
						</BaseControl>
					</PanelBody>
				</InspectorControls>
			</Fragment>
			<div {...useBlockProps()}>
				{__("Wp Css App – hello from the editor!", "wp-css-app")}
			</div>
		</>
	);
};

export default Edit;
