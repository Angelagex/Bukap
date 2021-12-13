export const Replace = (str) => {

    str = str.replace(/&amp;/g, "&");
    str = str.replace(/&gt;/g, ">");
    str = str.replace(/&lt;/g, "<");
    str = str.replace(/&quot;/g, '"');
    str = str.replace(/&#039;/g, "'");
    str = str.replace(/&nbsp;/g, ' ');
    str = str.replace(/&nbsp;/g, "'");
    str = str.replace(/&ntilde;/g, "ñ");
    str = str.replace(/&Ntilde;	;/g, "Ñ");
    str = str.replace(/&aacute;/g, "á");
    str = str.replace(/&eacute;/g, "é");
    str = str.replace(/&iacute;/g, "í");
    str = str.replace(/&oacute;/g, "ó");
    str = str.replace(/&uacute;/g, "ú");
    str = str.replace(/&Aacute;/g, "Á");
    str = str.replace(/&Eacute;/g, "É");
    str = str.replace(/&Iacute;/g, "Í");
    str = str.replace(/&Oacute;/g, "Ó");
    str = str.replace(/&Uacute;/g, "Ú");
    str = str.replace(/&euro;/g, "€");  
    str = str.replace(/&iquest;/g, "? ");
    str = str.replace(/&ldquo;/g, '"');
    str = str.replace(/&mdash;/g, '-');
    str = str.replace(/&rdquo;/g, '"');
    str = str.replace(/&hellip;/g, '...');
    str = str.replace(/&times;/g, 'x');
    str = str.replace(/<\/?[^>]+>/gi, '');

    return str
}
