import React, { FC } from "react";
import { PageHeader } from "antd";

interface PageHeaderProps {
	title: string;
	description: string;
}

const CustomPageHeader: FC<PageHeaderProps> = ({
	title,
	description,
}: PageHeaderProps) => {
	return (
		<PageHeader
			className="site-page-header"
			title={title}
			subTitle={description}
		/>
	);
};

export default CustomPageHeader;
