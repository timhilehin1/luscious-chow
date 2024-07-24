import client from "./sanity.client";

export async function getCategories() {
	try {
		const res =
			await client.fetch(`*[_type == 'category']{categoryName,'categoryImage': categoryImage{
              'url': asset->url,
              alt}}`);
		return res;
	} catch (err) {
		return [];
	}
}

export async function getProducts() {
	try {
		const res = await client.fetch(`*[_type == 'product']{
  productName,
  productPrice,
  productDescription,
  'productCategory': productCategory->{categoryName, 'categoryImage': {
    'url': categoryImage.asset->url,
    'alt': categoryImage.alt
  }},
  'variations': variations[]{type, price},
  'productImage': {
    'url': productImage.asset->url,
    'attribution': productImage.attribution,
    'alt': productImage.alt
  },
  
}`);
		return res;
	} catch (err) {
		return [];
	}
}
