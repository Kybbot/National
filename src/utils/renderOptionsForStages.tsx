import { ReactNode } from "react";
import { Block, BLOCKS, Inline } from "@contentful/rich-text-types";

export const renderOptionsForStages = (json: any) => {
	const headlinesMap = new Map<
		string,
		{
			index: number;
			title: string;
		}
	>();

	const filteredHeadlines = json.content.filter((item: { nodeType: string }) => item.nodeType === "heading-3");

	for (let i = 0; i < filteredHeadlines.length; i++) {
		headlinesMap.set(filteredHeadlines[i].content[0].value, {
			index: i + 1,
			title: filteredHeadlines[i].content[0].value,
		});
	}

	return {
		renderNode: {
			[BLOCKS.HEADING_3]: (node: any, children: ReactNode) => {
				const index = headlinesMap.get(node.content[0].value);
				return (
					<div className="service__headline">
						<span className="service__index">{index?.index}</span>
						<h2 className="service__h3">{children}</h2>
					</div>
				);
			},
			[BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => <p className="service__text">{children}</p>,
		},
	};
};
