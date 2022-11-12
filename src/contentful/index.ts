import { gql } from "@apollo/client";
import { GetAllArticlesQuery, GetAllArticlesQueryVariables } from "../@types/contentfulSchema";

import { apolloClient } from "./apolloClient";

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
