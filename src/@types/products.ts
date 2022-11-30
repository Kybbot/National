export type CategoriesListType = {
	name: string;
	nameEn: string;
	order: number;
}[];

export type SubCategoriesList = {
	name: string;
	nameEn: string;
	category: {
		name: string;
	};
}[];

export type ProductType = {
	name: string;
	nameEn: string;
	quantity: string;
	quantityEn: string;
	info: { [key: string]: string }[];
	infoEn: { [key: string]: string }[];
	image: { url: string };
	category: { name: string };
	subcategory: { name: string };
};

export type ProductsInfoType = {
	[key: string]: {
		[key: string]: ProductType[];
	};
};
