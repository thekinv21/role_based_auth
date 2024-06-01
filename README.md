
###   Role Based Authentication ReactJS ( Vite )


Role-based authorization and authentication are important to secure React applications. This requires us to use authentication handlers to manage authorization processes to control access to different parts of the application based on user roles


###   Documentation ( Dökümantasyon )

 - [Go to official page React Router Dom](https://reactrouter.com/en/main)
 - [You can review the Examples here](https://reactrouter.com/en/main/start/tutorial)



###   Essential packages for Role Based Auth ( Gerekli Paketler )

![packaejson](https://github.com/thekinv21/react_role_based_auth/assets/92122363/0f05be70-ca9e-4dcb-8b94-0bee888e5fac)


###  Routes Config and Route Provider ( Sayfalar Configurasiyonu oluşturma )


`/src/config/path.config.ts`

![route config](https://github.com/thekinv21/react_role_based_auth/assets/92122363/45a99d80-5e4f-4da1-9035-5bc297ac1d38)


`/src/route/router.tsx`

![routes page](https://github.com/thekinv21/react_role_based_auth/assets/92122363/a6017495-588c-40fe-a29e-089fbc2baa41)


`main.tsx`


![mas](https://github.com/thekinv21/react_role_based_auth/assets/92122363/818b1b33-bef2-4ccb-b080-aabe1aa6fd11)


###  Redux Toolkit Provider ( Redux Toolkit Kapsayıcı Oluşturma )

For save state and use redux actions ( Global state ve redux fonksiyonlarını global olarak kullanabilmek için)

`/src/provider/ReduxProvider.tsx`

![redux provi](https://github.com/thekinv21/react_role_based_auth/assets/92122363/05805b8e-2a14-4fb7-b1c8-94605cfad549)


- Create Store ( Depo oluşturma ):

`/src/store/store.ts`

![redux store](https://github.com/thekinv21/react_role_based_auth/assets/92122363/70fd3b70-6ec0-4b58-8dda-104a08f28a6b)



- Create User Slice  ( Kullanıcı nesnesi oluşturma ):

`/src/store/user.slice.ts`

![user slice](https://github.com/thekinv21/react_role_based_auth/assets/92122363/48cb9e8c-7c9b-4eed-a6de-d8e60af0ba0a)



- Create Custom Hooks useCustomDispatch and useCustomSelector ( custom hook oluşturma ) :

`/src/hooks/useCustomDispatch.ts`

![custıın dispatch](https://github.com/thekinv21/react_role_based_auth/assets/92122363/a15344f0-9133-4c98-ab51-a1139a86b9f9)


 `/src/hooks/useCustomSelector.ts`

![custom selector](https://github.com/thekinv21/react_role_based_auth/assets/92122363/e8aff568-c5d9-4988-ad07-7885679e98a1)


    
### React-Query Provider ( React-Query Kapsayıcı Oluşturma )

`/src/provider/ReactQueryProvider.tsx`

For HTTP request and responses ( HTTP istekleri için )


![react query](https://github.com/thekinv21/react_role_based_auth/assets/92122363/f91a5ed7-d52d-4501-8246-29d7df78dc13)


###  Application Provider ( Ana Kapsayıcı Oluşturma )

Contains all applicaiton providers ( Bütün Kapsayıcıları bir yerde toplamak için )


`/src/provider/ApplicationProvider.tsx`

![application provider](https://github.com/thekinv21/react_role_based_auth/assets/92122363/9407cd6d-1aed-4350-bf1e-4616789b3f9f)



`main.tsx`

![main tsx](https://github.com/thekinv21/react_role_based_auth/assets/92122363/e644afb0-ef05-472b-8c2a-c266ba3d9eae)




### Enums and Types ( Enumlar ve Tipleri Oluşturma )


- Enums


`/src/enum/auth.enum.ts`

![enums](https://github.com/thekinv21/react_role_based_auth/assets/92122363/ed6049e3-2449-47c4-927a-e300141314f3)



- Types

`/src/types/auth.types.ts`

![auth types](https://github.com/thekinv21/react_role_based_auth/assets/92122363/cf586624-91d5-4e85-ab6f-a5cc41e617a7)


`/src/types/user.types.ts`

![user types](https://github.com/thekinv21/react_role_based_auth/assets/92122363/8c413e9c-1268-4f02-a0e6-df1991dd07c4)


### Create Auth Utils ( Yardımcı Fonksiyonlar Oluşturma )


`/src/utils/auth.utils.ts`


![auth util](https://github.com/thekinv21/react_role_based_auth/assets/92122363/c0f3a068-f7d9-4e9f-b7c1-33a42cf5c4ac)



#### Create Axios Interceptor and ErrorCatch ( Axios Interceptor ve Hata Yakalama Oluşturma )


`/src/api/interceptor.ts`


![interceptırs](https://github.com/thekinv21/react_role_based_auth/assets/92122363/c7940ba6-5b6d-48a6-9b3f-481bf2805cfa)



`/src/api/error.ts`


![errorcatc](https://github.com/thekinv21/react_role_based_auth/assets/92122363/80c5b35c-ff16-4c12-a91e-682822766988)





#### Create Auth Services ( Giriş HTTP fonksiyonlarını Oluşturma )


`/src/services/auth.service.ts`


![aut service](https://github.com/thekinv21/react_role_based_auth/assets/92122363/24fe18cf-ceee-4098-b8e2-1f025f7a09d0)



#### Create Login Page ( Giriş Sayfası ve formunu Oluşturma )


![Ekran Resmi 2024-06-02 01 04 11](https://github.com/thekinv21/react_role_based_auth/assets/92122363/f37e410f-addc-4824-9d19-5fbe74549c32)



#### Backend Response on Network if request is success ( Backenden dönen değerler )

If the username and password are typed correctly and the HTTP `POST` request is completed successfully, you will see this response in `NETWORK`.

##

Eğer kullanıcı adı ve parola doğru yazıldı ise ve HTTP `POST` isteği başarılı bir şekilde tamamlandı ise `NETWORK` de bu responsu göreceksiniz..

![Ekran Resmi 2024-06-02 01 05 06](https://github.com/thekinv21/react_role_based_auth/assets/92122363/593cb8bd-fd12-41b5-bb97-fa52fac9f3d1)


#### How to save Cookie and navigate ( Cookie'ye nasıl kayıt edilir ve ana sayfaya yönlendirilir )


We need to keep the ACCESSTOKEN and REFRESHTOKEN returned from backend somewhere, because the user needs the ACCESSTOKEN to be able to perform operations with the token, and COOKIE should be chosen as the storage area for them (LocaleStorage should not be chosen, if the token returned from backenden has no duration, it can cause problems, it will cause a security vulnerability...)

## 

Backenden dönen ACCESSTOKEN ve REFRESHTOKEN'ı bir yerde tutmamız gerekiyor çünkü kullanıcının token ile işlemlerini yapabilmek için ACCESSTOKEN'a ihtiyacı var ve onları saklama alanı olarak da COOKİE seçilmelidir ( LocaleStorage seçilmemelidir, eğer backenden dönen tokenın süresi yok ise sıkıntı çıkartabilir, güvenlik açıklığına neden olur...)


NOTE: THİS ACTİONS INSIDE LOGIN PAGE...

![login page auth](https://github.com/thekinv21/react_role_based_auth/assets/92122363/0fb5e64f-c325-48c0-b57b-dd7b36341267)


#### Saved Tokens on Cookie ( Cookiede saklanan tokenler )


The reason we store it in the cookie is to verify whether the user is logged in or not, if there are tokens in the cookie then the user is logged in 

## 

Cookiede saklamamızın sebebi kullanıcının giriş yapıp yapmadığını teyit etmektir, eğer cookie de tokenlar varsa demek ki kullanıcı giriş yapmıştır 

![Ekran Resmi 2024-06-02 01 18 13](https://github.com/thekinv21/react_role_based_auth/assets/92122363/9c1d291c-3dd5-48c0-a60f-9fa3c550b5a8)



#### Create Home Page ( Ana Sayfa Oluşturma )

The first page the user will see after logging in 
## 
Kullanıcının giriş yaptıktan sonra göreceği ilk sayfadır 


- if user has role ADMIN ( Eğer giriş yapan admin ise )

![Ekran Resmi 2024-06-02 01 07 43](https://github.com/thekinv21/react_role_based_auth/assets/92122363/1087fbb4-54cd-44b1-9303-0af5e1362784)


- if user has role USER ( Eğer giriş yapan kullanıcı ise )

![Ekran Resmi 2024-06-02 01 08 22](https://github.com/thekinv21/react_role_based_auth/assets/92122363/83c33a35-06a0-4089-a852-bc7a54b72ed5)



#### Create custom useCustomAuth hook for detect roles and tokens

![custom  use auth](https://github.com/thekinv21/react_role_based_auth/assets/92122363/d56bf584-4567-4709-a54c-d67bfd9bdb3b)




#### Create Promoted Routes ( Tanıtılmış Rotalar Oluşturma )


If the user is not logged in, they should not be able to see the main page, so Promoted Routes should be created. 

## 

Eğer kullanıcı giriş yapmadıysa mantıkken ana sayfayı görememeli bundan dolayı Tanıtılmış Rotalar Oluşturulmalıdır.. )


![protected auth](https://github.com/thekinv21/react_role_based_auth/assets/92122363/107520be-3c9c-4ba8-ae6b-17efaebc84e7)



#### Create Admin Promoted Routes ( Tanıtılmış Admin Rotası Oluşturma )


If the user is logged in, he should be able to see the promoted pages logically, but he can only see the pages allowed for his role, while the admin can see all the pages, so Promoted Routes should be created... )

## 

Eğer kullanıcı giriş yaptıysa mantıkken tanıtılmış sayfaları görebilmeli ama sadece onun rolüne izin verilen sayfaları görebilir admin ise bütün sayfaları görebilmektedir bundan dolayı Tanıtılmış Rotalar Oluşturulmalıdır.. )


![proteted admin layıt](https://github.com/thekinv21/react_role_based_auth/assets/92122363/c7a2e90e-3aec-417d-ae61-2b9dc8d5da8d)


 #### Modify routes for add PromotedRoutes and PromotedAdminRoutes

![els](https://github.com/thekinv21/react_role_based_auth/assets/92122363/a7dc8d26-304a-4254-9961-3d34ff7602e4)













