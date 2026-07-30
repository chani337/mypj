def compute_vpd(temp_c: float, relative_humidity: float) -> float:
    """Vapor Pressure Deficit (VPD) Calculation in kPa"""
    import math
    svp = 0.61078 * math.exp((17.27 * temp_c) / (temp_c + 237.3))
    avp = svp * (relative_humidity / 100.0)
    return round(svp - avp, 2)
