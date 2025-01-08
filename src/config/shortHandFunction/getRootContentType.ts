export const getRootContentType = (pageData: any) => {
    return pageData.fields.content.sys.contentType.sys.id;
}
