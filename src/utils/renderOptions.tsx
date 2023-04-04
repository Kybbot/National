import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Block, BLOCKS, Inline, INLINES } from "@contentful/rich-text-types";

import { YoutubeVideo } from "../components/rich-text/YoutubeVideo";

import { TextAsset, TextBlock, TextLink, TextLinks, videoTypes } from "../@types/contentfulRichText";

export const renderOptions = (links: TextLinks) => {
	const assetMap = new Map<string, TextAsset>();
	for (const asset of links.assets.block) {
		assetMap.set(asset.sys.id, asset);
	}

	const hyperLinksMap = new Map<string, TextLink>();
	for (const entry of links.entries.hyperlink) {
		hyperLinksMap.set(entry.sys.id, entry);
	}

	const entriesMap = new Map<string, TextBlock>();
	for (const entry of links.entries.block) {
		entriesMap.set(entry.sys.id, entry);
	}

	return {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => {
				return <p className="article__text">{children}</p>;
			},
			[BLOCKS.HEADING_2]: (node: Block | Inline, children: ReactNode) => (
				<div className="article__wrapper">
					<h2 className="article__h2">{children}</h2>
					<div className="article__dec"></div>
				</div>
			),
			[BLOCKS.HEADING_3]: (node: Block | Inline, children: ReactNode) => (
				<div className="article__wrapper">
					<h3 className="article__h3">{children}</h3>
					<div className="article__dec"></div>
				</div>
			),
			[BLOCKS.UL_LIST]: (node: Block | Inline, children: ReactNode) => <ul className="article__list">{children}</ul>,
			[BLOCKS.OL_LIST]: (node: Block | Inline, children: ReactNode) => <ol className="article__list">{children}</ol>,
			[BLOCKS.LIST_ITEM]: (node: Block | Inline, children: ReactNode) => <li className="article__item">{children}</li>,
			[BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
				const asset = assetMap.get(node.data.target.sys.id);
				if (asset?.contentType === videoTypes.mp4) {
					return (
						<video controls preload="metadata" className="article__video" width={1132}>
							<source src={asset!.url} type="video/mp4"></source>
							Download the
							<a href={asset!.url}>MP4</a>
							video.
						</video>
					);
				}

				return (
					<Image
						width={asset?.width}
						height={asset?.height}
						src={asset!.url}
						placeholder="blur"
						blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjEwMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNkNWQ1ZDUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlMmUyZTIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cxKSIvPjwvc3ZnPg=="
						alt={asset!.title}
						className="article__img"
					/>
				);
			},
			[BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline, children: ReactNode) => {
				const asset = entriesMap.get(node.data.target.sys.id);
				if (asset?.__typename === "YouTubeVideo") {
					return <YoutubeVideo id={asset.id} title={asset.title} />;
				}
			},
			[INLINES.HYPERLINK]: (node: Block | Inline, children: ReactNode) => (
				<a className="article__link" target="_blank" rel="noreferrer noopener" href={`${node.data.uri}`}>
					{children}
				</a>
			),
			[INLINES.ENTRY_HYPERLINK]: (node: Block | Inline, children: ReactNode) => {
				const entry = hyperLinksMap.get(node.data.target.sys.id);
				if (entry?.__typename === "Article") {
					return (
						<Link href={`/article/${entry.slug}`} className="article__link">
							{children}
						</Link>
					);
				}

				if (entry?.__typename === "Service") {
					return (
						<Link href={`/service/${entry.slug}`} className="article__link">
							{children}
						</Link>
					);
				}
			},
		},
	};
};
