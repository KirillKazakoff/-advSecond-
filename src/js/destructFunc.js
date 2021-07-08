export default function destruct(destructor) {
    const {
        id,
        name,
        icon,
        description = 'не указан',
    } = destructor;

    return [id, name, icon, description];
}
