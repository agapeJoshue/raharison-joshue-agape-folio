export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - 64;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
    });
};
