export const videoTypes = {
	mp4: "video/mp4",
};

export type TextLink = {
	__typename: "Article" | "Product" | "ProductCategory" | "ProductSubcategory" | "Service";
	title?: string;
	slug?: string;
	sys: {
		__typename?: "Sys";
		id: string;
	};
};

export type TextAsset = {
	__typename?: "Asset";
	contentType: string;
	title: string;
	url: string;
	width: number;
	height: number;
	sys: { __typename?: "Sys"; id: string };
};

export type TextLinks = {
	entries: {
		hyperlink: TextLink[];
	};
	assets: {
		block: TextAsset[];
	};
};
