function Product(code, name, category, description,price,image)
{
	this.Name = name;
	this.Category = category;
	this.Code = code;
	this.Description = description;
	this.Price = price;
	if (image)
		this.Image = image;
	else
		this.Image = "http://localhost:54757/Images/default-product-image.jpg";
}