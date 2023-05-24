# organize head

<div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 align-middle md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteMetedata.headerTitle}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        </ul>

# pagination

```ts
{
  pagination && pagination.totalPages > 1 && !searchValue && (
    <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
  )
}
```

  <div className="flex-row pt-6 pb-8 space-y-2 md:space-y-5">
              <div className="inline-flex items-baseline">
                <div className="inline-flex self-start justify-self-start"></div>
                <SearchBox className="justify-end mx" />
              </div>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <Hits hitComponent={Hit} />
            </ul>
          </div >
            
                // {pagination && pagination.totalPages > 1 && !searchValue && (
    //   <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
    // )}
