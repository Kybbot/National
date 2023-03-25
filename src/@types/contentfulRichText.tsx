export type TextLink = {
	__typename: "Article" | "Product" | "ProductCategory" | "ProductSubcategory" | "Service";
	title?: string;
	slug?: string;
	sys: {
		__typename?: "Sys";
		id: string;
	};
};

export type TextLinks = {
	__typename?: "ArticleTextLinks";
	entries: {
		__typename?: "ArticleTextEntries";
		hyperlink: Array<
			| { __typename: "Article"; title: string; slug: string; sys: { __typename?: "Sys"; id: string } }
			| { __typename: "Product"; sys: { __typename?: "Sys"; id: string } }
			| { __typename: "ProductCategory"; sys: { __typename?: "Sys"; id: string } }
			| { __typename: "ProductSubcategory"; sys: { __typename?: "Sys"; id: string } }
			| { __typename: "Service"; title: string; slug: string; sys: { __typename?: "Sys"; id: string } }
		>;
	};
};
