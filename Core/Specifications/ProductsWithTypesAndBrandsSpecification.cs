using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification(ProductSpecParams ProductParams)
            :base(x=>
            (string.IsNullOrEmpty(ProductParams.Search) || x.Name.ToLower().Contains(ProductParams.Search))       
            && (!ProductParams.BrandId.HasValue || x.ProductBrandId == ProductParams.BrandId)
            &&(!ProductParams.TypeId.HasValue || x.ProductTypeId == ProductParams.TypeId))
        {
            AddInclude(x => x.ProductBrand);
            AddInclude(x => x.ProductType);
            AddOrderBy(x => x.Name);
            ApplyPaging(ProductParams.PageSize * (ProductParams.PageIndex - 1), ProductParams.PageIndex);

            if(!string.IsNullOrEmpty(ProductParams.Sort))
            {
                switch(ProductParams.Sort)
                {
                    case "priceAsc": AddOrderBy(x => x.Price);
                        break;
                    case "priceDesc": AddOrderByDescending(x => x.Price);
                        break;
                    default:AddOrderBy(x => x.Name);
                        break;

                }
            }
        }

        public ProductsWithTypesAndBrandsSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductBrand);
            AddInclude(x => x.ProductType);
        }
    }
}
