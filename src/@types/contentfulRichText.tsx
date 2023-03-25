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
	title: string;
	url: string;
	width: number;
	height: number;
	sys: { __typename?: "Sys"; id: string };
};

export type TextLinks = {
	__typename?: "ArticleTextLinks";
	entries: {
		__typename?: "ArticleTextEntries";
		hyperlink: TextLink[];
	};
	assets: {
		__typename?: "ArticleTextAssets";
		block: TextAsset[];
	};
};
