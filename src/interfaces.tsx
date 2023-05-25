export interface CatalogItem {
    title_rus: string;
    key: string;
  }

 export interface CatalogueResponse extends Array<CatalogItem> {}
 export interface VacansiesResponse extends Array<IVacancy> {}

 export interface IVacancy {
    id: number;
    profession: string;
    firm_name: string;
    town: {
      title: string;
    };
    type_of_work: {
      title: string;
    };
    payment_to: number;
    payment_from: number;
    currency: string;
    vacancyRichText: string;
    favorite: boolean;
  }
