export const PAGE_BASE_QUERY_WITH_SLUG = (slug: string, contentType: string) => {
    return {
        content_type: 'pageBase',
        'fields.slug': slug,
        "fields.content.sys.contentType.sys.id": contentType,
        include: 10,
    }
}
