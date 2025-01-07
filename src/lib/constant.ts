export const PAGE_BASE_QUERY_WITH_SLUG = (slug: string) => {
    return {
        content_type: 'pageBase',
        'fields.slug': slug,
        include: 10,
      }
}