<<<<<<< HEAD
<?php

/**
 * Concrete empty token class.
 */
class HTMLPurifier_Token_Empty extends HTMLPurifier_Token_Tag
{
    public function toNode() {
        $n = parent::toNode();
        $n->empty = true;
        return $n;
    }
}

// vim: et sw=4 sts=4
=======
<?php

/**
 * Concrete empty token class.
 */
class HTMLPurifier_Token_Empty extends HTMLPurifier_Token_Tag
{
    public function toNode() {
        $n = parent::toNode();
        $n->empty = true;
        return $n;
    }
}

// vim: et sw=4 sts=4
>>>>>>> 7d5343e0dc16dcd9d110b3f353cfd8fc8c7755b0
