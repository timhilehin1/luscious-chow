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
export async function getBusinessInfo() {
	try {
		const res = await client.fetch(`*[_type == "businessInformation"]{
            ...,
             "businessLogo":businessLogo.asset->url,
          }
          `);
		return res[0];
	} catch (err) {
		return [];
	}
}

export async function getFeaturedProducts() {
	try {
		const res = await client.fetch(`*[_type == "featured"]{
            products[]->{
              productName,
              "productImageUrl": productImage.asset->url
            }
          }
          `);
		return res[0].products;
	} catch (err) {
		return [];
	}
}
