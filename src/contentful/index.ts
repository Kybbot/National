import { gql } from "@apollo/client";

import { apolloClient } from "./apolloClient";

import {
	GeServiceBySlugQuery,
	GeServiceBySlugQueryVariables,
	GetAllArticlesQuery,
	GetAllArticlesQueryVariables,
	GetAllArticlesSlugsQuery,
	GetAllArticlesSlugsQueryVariables,
	GetAllServicesQuery,
	GetAllServicesQueryVariables,
	GetAllServicesSlugsQuery,
	GetAllServicesSlugsQueryVariables,
	GetArticleBySlugQuery,
	GetArticleBySlugQueryVariables,
	GetProductsQuery,
	GetProductsQueryVariables,
} from "../@types/contentfulSchema";

export const getAllArticles = async () => {
	const allTagsQuery = gql`
		query getAllArticles {
			articleCollection {
				total
				items {
					title
					titleEn: title(locale: "en-US")
					slug
					date
					image {
						url
					}
					description
					descriptionEn: description(locale: "en-US")
				}
			}
		}
	`;

	const { data } = await apolloClient.query<GetAllArticlesQuery, GetAllArticlesQueryVariables>({
		query: allTagsQuery,
	});

	return data;
};

export const getAllArticlesSlugs = async () => {
	const allArticlesSlugs = gql`
		query getAllArticlesSlugs {
			articleCollection {
				items {
					slug
				}
			}
		}
	`;

	const { data } = await apolloClient.query<GetAllArticlesSlugsQuery, GetAllArticlesSlugsQueryVariables>({
		query: allArticlesSlugs,
	});

	return data;
};

export const getArticleBySlug = async (slug: string | string[]) => {
	const oneSlug = typeof slug === "string" ? slug : slug[0];

	const articleBySlug = gql`
		query getArticleBySlug($slug: String) {
			articleCollection(where: { slug: $slug }, limit: 1) {
				items {
					title
					titleEn: title(locale: "en-US")
					slug
					date
					image {
						url
					}
					description
					descriptionEn: description(locale: "en-US")
					text {
						json
					}
					textEn: text(locale: "en-US") {
						json
					}
				}
			}
		}
	`;

	const { data } = await apolloClient.query<GetArticleBySlugQuery, GetArticleBySlugQueryVariables>({
		query: articleBySlug,
		variables: {
			slug: oneSlug,
		},
	});

	return data;
};

export const getProducts = async () => {
	const products = gql`
		query getProducts {
			categoriesList: productCategoryCollection {
				items {
					name
					nameEn: name(locale: "en-US")
				}
			}
			subCategoriesList: productSubcategoryCollection {
				items {
					name
					nameEn: name(locale: "en-US")
					category {
						name
					}
				}
			}
			categories: productCategoryCollection {
				items {
					name
					linkedFrom {
						productSubcategoryCollection {
							items {
								name
							}
						}
					}
				}
			}
			products: productCollection {
				items {
					name
					nameEn: name(locale: "en-US")
					quantity
					quantityEn: quantity(locale: "en-US")
					image {
						url
					}
					info
					infoEn: info(locale: "en-US")
					category {
						name
					}
					subcategory {
						name
					}
				}
			}
		}
	`;

	const { data } = await apolloClient.query<GetProductsQuery, GetProductsQueryVariables>({
		query: products,
	});

	return data;
};

export const getAllServices = async () => {
	const allServices = gql`
		query getAllServices {
			serviceCollection {
				items {
					title
					titleEn: title(locale: "en-US")
					slug
					icon {
						url
						width
						height
					}
				}
			}
		}
	`;

	const { data } = await apolloClient.query<GetAllServicesQuery, GetAllServicesQueryVariables>({
		query: allServices,
	});

	return data;
};

export const getAllServicesSlugs = async () => {
	const allServicesSlugs = gql`
		query getAllServicesSlugs {
			serviceCollection {
				items {
					slug
				}
			}
		}
	`;

	const { data } = await apolloClient.query<GetAllServicesSlugsQuery, GetAllServicesSlugsQueryVariables>({
		query: allServicesSlugs,
	});

	return data;
};

export const geServiceBySlug = async (slug: string | string[]) => {
	const oneSlug = typeof slug === "string" ? slug : slug[0];

	const serviceBySlug = gql`
		query geServiceBySlug($slug: String) {
			serviceCollection(where: { slug: $slug }, limit: 1) {
				items {
					title
					titleEn: title(locale: "en-US")
					description
					descriptionEn: description(locale: "en-US")
					bgImg {
						url
					}
					subTitle
					subTitleEn: subTitle(locale: "en-US")
					stages {
						json
					}
					stagesEn: stages(locale: "en-US") {
						json
					}
				}
			}
		}
	`;

	const { data } = await apolloClient.query<GeServiceBySlugQuery, GeServiceBySlugQueryVariables>({
		query: serviceBySlug,
		variables: {
			slug: oneSlug,
		},
	});

	return data;
};
