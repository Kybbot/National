export const videoTypes = {
	mp4: "video/mp4",
};

type Typename = "Article" | "Product" | "ProductCategory" | "ProductSubcategory" | "Service" | "YouTubeVideo";

export type TextLink = {
	__typename: Typename;
	title?: string;
	slug?: string;
	sys: { __typename?: "Sys"; id: string };
};

export type TextBlock = {
	__typename: Typename;
	title?: string;
	id?: string;
	shareLink?: string;
	sys: { __typename?: "Sys"; id: string };
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
		block: TextBlock[];
	};
	assets: {
		block: TextAsset[];
	};
};
