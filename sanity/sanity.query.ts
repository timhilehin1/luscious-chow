import client from "./sanity.client";
import { groq } from "next-sanity";

const query = groq`*[_type == "product"]{
...
}`;

export async function getAllProducts() {
	try {
		const res = await client.fetch(query);
		// console.log(res);
		return res;
	} catch (err) {
		return [];
	}
}


export async function getAllCategory() {
	try {
		const res = await client.fetch(`*[_type == "category"]{
            ...,
            "categoryImage":categoryImage.asset->url,
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