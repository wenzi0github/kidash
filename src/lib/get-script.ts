const getScript = (url: string, attrs?: Record<string, string>) => {
  if (attrs?.id && document.getElementById(attrs.id)) {
    // return if script already loaded
    return Promise.resolve(true);
  }

  const script = document.createElement("script");
  script.setAttribute("src", url);

  if (attrs) {
    for (const key in attrs) {
      script.setAttribute(key, attrs[key]);
    }
  }

  return new Promise((resolve, reject) => {
    script.onload = () => {
      resolve(true);
    };
    script.onerror = (error: any) => {
      reject(error);
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  });
};
export default getScript;
