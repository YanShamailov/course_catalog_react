function AvailabilityBadge(isAvailable) {
    const availabilityBadgeText = isAvailable ? "Доступен" : "Набор закрыт";
    const availabilityBadgeClass =
        isAvailable ?
            "availability-badge isAvailability" :
            "availability-badge isNotAvailability";


    return <span className={availabilityBadgeClass}>{availabilityBadgeText}</span>;
}

export default AvailabilityBadge;