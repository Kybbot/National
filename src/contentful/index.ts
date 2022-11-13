import { gql } from "@apollo/client";

import { apolloClient } from "./apolloClient";

import {
	GetAllArticlesQuery,
	GetAllArticlesQueryVariables,
	GetAllArticlesSlugsQuery,
	GetAllArticlesSlugsQueryVariables,
	GetArticleBySlugQuery,
	GetArticleBySlugQueryVariables,
} from "../@types/contentfulSchema";

export const getAllArticles = async () => {
	const allTagsQuery = gql`
		query getAllArticles {
			articleCollection {
				total
				items {
					title
					titleUk: title(locale: "uk")
					slug
					date
					image {
						url
					}
					description
					descriptionUk: description(locale: "uk")
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
					titleUk: title(locale: "uk")
					slug
					date
					image {
						url
					}
					description
					descriptionUk: description(locale: "uk")
					text {
						json
					}
					textUk: text(locale: "uk") {
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
