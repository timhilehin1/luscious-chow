export interface ProductCategoryData {
	categoryName: string;
	categoryImage: imageData;
}

export interface imageData {
	url: string;
	alt: string;
	attribution: string;
}

export interface variationData {
	price: number;
	type: string;
}

export interface ProductData {
	productName: string;
	productPrice: number;
	productDescription: string;
	productCategory: ProductCategoryData;
	variations: variationData[];
	productImage: imageData;
}
